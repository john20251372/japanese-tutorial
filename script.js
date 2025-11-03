// 日语旅行短语学习应用

// 短语数据从 phrases-data.js 加载
// phrasesData 和 commonWordsData 已在 phrases-data.js 中定义
// 确保 phrases-data.js 在 script.js 之前加载

let allCommonWords = [];

// 确保数据已加载，如果未加载则等待
function ensureDataLoaded() {
    if (typeof phrasesData === 'undefined' || Object.keys(phrasesData || {}).length === 0) {
        return false;
    }
    if (typeof getAllCommonWords === 'function') {
        allCommonWords = getAllCommonWords();
    }
    return true;
}

// 应用状态
let currentCategory = 'greetings';
let currentMode = 'home'; // 默认显示首页
let showFurigana = localStorage.getItem('showFurigana') !== 'false';
let showChinese = localStorage.getItem('showChinese') !== 'false';
let testMode = { category: 'greetings', index: 0 };
let selectedVoice = null;
let selectedVoiceName = localStorage.getItem('selectedJapaneseVoiceName') || 'auto';
let currentJapaneseVoice = null; // 当前使用的日语语音

// 加载进度
function loadProgress() {
    const saved = localStorage.getItem('japaneseProgress');
    return saved ? JSON.parse(saved) : {};
}

// 保存进度
function saveProgress(progress) {
    localStorage.setItem('japaneseProgress', JSON.stringify(progress));
}

// 获取短语进度
function getPhraseProgress(category, index) {
    const progress = loadProgress();
    const key = `${category}-${index}`;
    return progress[key] || 'not_mastered';
}

// 设置短语进度
function setPhraseProgress(category, index, status) {
    const progress = loadProgress();
    const key = `${category}-${index}`;
    progress[key] = status;
    saveProgress(progress);
    updateProgressOverview();
}

// 更新进度概览
function updateProgressOverview() {
    const progress = loadProgress();
    let mastered = 0;
    let total = 0;
    const categoryStats = {};
    
    // 计算短语进度
    if (typeof phrasesData !== 'undefined' && phrasesData && typeof phrasesData === 'object') {
        Object.keys(phrasesData).forEach(category => {
            if (Array.isArray(phrasesData[category])) {
                let categoryMastered = 0;
                phrasesData[category].forEach((phrase, index) => {
                    total++;
                    const key = `${category}-${index}`;
                    if (progress[key] === 'mastered') {
                        mastered++;
                        categoryMastered++;
                    }
                });
                categoryStats[category] = categoryMastered;
            }
        });
    }
    
    // 计算常用词进度（如果已加载）
    if (allCommonWords && allCommonWords.length > 0) {
        allCommonWords.forEach((word, index) => {
            total++;
            const key = `commonwords-${index}`;
            if (progress[key] === 'mastered') {
                mastered++;
            }
        });
    }
    
    // 更新详情页进度
    const masteredEl = document.getElementById('mastered-count');
    const totalEl = document.getElementById('total-count');
    if (masteredEl) {
        masteredEl.textContent = mastered;
        totalEl.textContent = total;
        const percentage = total > 0 ? (mastered / total) * 100 : 0;
        document.getElementById('progress-fill').style.width = `${percentage}%`;
    }
    
    // 更新首页进度
    const homeMasteredEl = document.getElementById('home-mastered-count');
    const homeTotalEl = document.getElementById('home-total-count');
    if (homeMasteredEl) {
        homeMasteredEl.textContent = mastered;
        homeTotalEl.textContent = total;
        const percentage = total > 0 ? (mastered / total) * 100 : 0;
        document.getElementById('home-progress-fill').style.width = `${percentage}%`;
        
        // 更新各分类进度
        Object.keys(categoryStats).forEach(category => {
            const el = document.getElementById(`${category}-mastered`);
            if (el) el.textContent = categoryStats[category];
        });
    }
}

// 获取最佳日语语音
function getBestJapaneseVoice() {
    if (!('speechSynthesis' in window)) return null;
    
    const voices = speechSynthesis.getVoices();
    if (voices.length === 0) return null;
    
    // 重新读取localStorage中的选择（可能在初始化后更新）
    const savedVoiceName = localStorage.getItem('selectedJapaneseVoiceName') || 'auto';
    selectedVoiceName = savedVoiceName;
    
    // 如果用户选择了特定语音，优先返回该语音
    if (selectedVoiceName && selectedVoiceName !== 'auto') {
        const preferred = voices.find(v => v.name === selectedVoiceName && v.lang.startsWith('ja'));
        if (preferred) {
            console.log('使用用户选择的语音:', preferred.name);
            return preferred;
        } else {
            console.warn('找不到选择的语音:', selectedVoiceName, '，将使用自动选择');
        }
    }
    
    // 如果选择的是简化的标签（如"男声"），需要找到对应的语音
    if (selectedVoiceName && selectedVoiceName !== 'auto') {
        // 已经在上面处理过了，这里主要是为了兼容
    }
    
    // 策略1: 查找明确的日语语音（优先女性声音，通常更清晰）
    let japaneseVoice = voices.find(voice => 
        voice.lang === 'ja-JP' && 
        (voice.name.toLowerCase().includes('kyoko') || 
         voice.name.toLowerCase().includes('sayo') ||
         voice.name.toLowerCase().includes('hazel') ||
         voice.name.toLowerCase().includes('zira'))
    );
    
    if (japaneseVoice) return japaneseVoice;
    
    // 策略2: 查找任何 ja-JP 语言的语音
    japaneseVoice = voices.find(voice => voice.lang === 'ja-JP');
    if (japaneseVoice) return japaneseVoice;
    
    // 策略3: 查找以 ja 开头的语言
    japaneseVoice = voices.find(voice => voice.lang.startsWith('ja'));
    if (japaneseVoice) return japaneseVoice;
    
    // 策略4: 通过名称查找
    japaneseVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('japanese') || 
        voice.name.includes('日本語') ||
        voice.name.toLowerCase().includes('japan')
    );
    
    return japaneseVoice || null;
}

// 改进的语音播放功能
function playPronunciation(text) {
    if (!('speechSynthesis' in window)) {
        alert('您的浏览器不支持语音合成功能。请使用 Chrome、Edge 或 Safari 浏览器。');
        return;
    }
    
    if (!text || text.trim() === '') {
        console.warn('播放文本为空');
        return;
    }
    
    // 取消之前的播放
    speechSynthesis.cancel();
    
    // 等待一小段时间确保取消完成，并确保语音列表已加载
    setTimeout(() => {
        // 再次获取语音列表（某些浏览器需要）
        const voices = speechSynthesis.getVoices();
        
        const utterance = new SpeechSynthesisUtterance(text);
        
        // 获取最佳日语语音（每次播放前重新获取，确保使用最新选择）
        const japaneseVoice = getBestJapaneseVoice();
        currentJapaneseVoice = japaneseVoice; // 保存当前使用的语音
        
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
            utterance.lang = japaneseVoice.lang || 'ja-JP';
            console.log('✓ 使用日语语音:', japaneseVoice.name, `(${japaneseVoice.lang})`);
        } else {
            // 如果没有找到日语语音，使用默认设置
            utterance.lang = 'ja-JP';
            console.warn('⚠ 未找到专用日语语音，使用系统默认日语语音');
        }
        
        // 优化的语音设置
        utterance.rate = 0.85;  // 稍微慢一点，更清晰
        utterance.pitch = 1.0;   // 正常音调
        utterance.volume = 1.0; // 最大音量
        
        // 语音播放完成回调
        utterance.onend = function() {
            console.log('语音播放完成');
        };
        
        utterance.onerror = function(event) {
            console.error('语音播放错误:', event.error);
            alert('语音播放出错，请重试。错误代码: ' + event.error);
        };
        
        utterance.onstart = function() {
            console.log('开始播放语音:', text);
        };
        
        try {
            speechSynthesis.speak(utterance);
            console.log('已调用 speechSynthesis.speak');
        } catch (error) {
            console.error('调用 speechSynthesis.speak 出错:', error);
            alert('语音播放失败: ' + error.message);
        }
    }, 100);
}


// 显示语音信息
function showVoiceInfo() {
    if ('speechSynthesis' in window) {
        const voices = speechSynthesis.getVoices();
        const japaneseVoices = voices.filter(v => v.lang.startsWith('ja'));
        const currentVoice = currentJapaneseVoice || getBestJapaneseVoice();
        
        let message = '🎤 语音引擎信息\n\n';
        message += `总语音数量: ${voices.length}\n`;
        message += `日语语音数量: ${japaneseVoices.length}\n\n`;
        
        if (currentVoice) {
            message += `✓ 当前使用: ${currentVoice.name}\n`;
            message += `语言代码: ${currentVoice.lang}\n`;
            message += `语言: ${currentVoice.localService ? '本地' : '在线'}\n\n`;
        } else {
            message += '⚠ 未找到专用日语语音\n';
            message += '将使用系统默认日语语音\n\n';
        }
        
        if (japaneseVoices.length > 0) {
            message += '可用的日语语音:\n';
            japaneseVoices.forEach((v, i) => {
                const marker = (currentVoice && v.name === currentVoice.name) ? '✓ ' : '  ';
                message += `${marker}${v.name} (${v.lang})\n`;
            });
        }
        
        alert(message);
    } else {
        alert('您的浏览器不支持语音合成功能。');
    }
}

// 初始化语音（等待语音列表加载）
function initVoices() {
    if ('speechSynthesis' in window) {
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
            // 获取最佳语音（自动选择）
            const japaneseVoice = getBestJapaneseVoice();
            if (japaneseVoice) {
                selectedVoice = japaneseVoice;
                currentJapaneseVoice = japaneseVoice;
                console.log('✓ 已选择日语语音:', japaneseVoice.name, japaneseVoice.lang);
            } else {
                console.log('可用的语音数量:', voices.length);
                const jpVoices = voices.filter(v => v.lang.startsWith('ja'));
                console.log('日语相关语音:', jpVoices.map(v => `${v.name} (${v.lang})`));
            }
        }
    }
}

// 等待语音列表加载（处理异步加载）
if ('speechSynthesis' in window) {
    // 立即尝试加载
    if (speechSynthesis.getVoices().length > 0) {
        initVoices();
    }
    
    // 监听语音列表变化（某些浏览器异步加载）
    speechSynthesis.addEventListener('voiceschanged', initVoices);
    
    // 延迟再次尝试（某些浏览器需要额外时间）
    setTimeout(initVoices, 500);
    setTimeout(initVoices, 1500);
}


// 渲染学习模式的短语
function renderPhrases() {
    const container = document.getElementById('phrases-container');
    
    // 处理常用词分类
    if (currentCategory === 'commonwords') {
        renderCommonWords(container);
        return;
    }
    
    if (typeof phrasesData === 'undefined' || !phrasesData[currentCategory]) {
        container.innerHTML = '<div class="error-message">数据加载中，请稍候...<br>请确保 phrases-data.js 已正确加载</div>';
        return;
    }
    
    const phrases = phrasesData[currentCategory];
    
    container.innerHTML = phrases.map((phrase, index) => {
        const progress = getPhraseProgress(currentCategory, index);
        const isMastered = progress === 'mastered';
        
        return `
            <div class="phrase-card ${isMastered ? 'mastered' : ''}" data-index="${index}">
                <div class="phrase-header">
                    <span class="phrase-number">${index + 1}</span>
                    <button class="mastery-btn ${isMastered ? 'active' : ''}" 
                            data-category="${currentCategory}" 
                            data-index="${index}"
                            title="${isMastered ? '标记为未掌握' : '标记为已掌握'}">
                        ${isMastered ? '✓' : '○'}
                    </button>
                </div>
                <div class="phrase-content">
                    <div class="phrase-japanese-wrapper">
                        <div class="phrase-japanese">${phrase.japanese}</div>
                        <button class="play-btn" data-text="${phrase.japanese}" title="播放发音">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                    <div class="phrase-furigana ${showFurigana ? 'visible' : ''}" style="display: ${showFurigana ? 'block' : 'none'}">${phrase.furigana}</div>
                    <div class="phrase-chinese ${showChinese ? '' : 'hidden'}" style="display: ${showChinese ? 'block' : 'none'}">${phrase.chinese}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // 附加事件监听器
    container.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playPronunciation(btn.dataset.text);
    });
});

    container.querySelectorAll('.mastery-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const index = parseInt(btn.dataset.index);
            const currentProgress = getPhraseProgress(category, index);
            const newStatus = currentProgress === 'mastered' ? 'not_mastered' : 'mastered';
            setPhraseProgress(category, index, newStatus);
            renderPhrases();
        });
    });
}

// 渲染常用词
function renderCommonWords(container) {
    if (typeof commonWordsData === 'undefined' || !commonWordsData || Object.keys(commonWordsData).length === 0) {
        container.innerHTML = '<div class="error-message">常用词数据加载中，请稍候...<br>请确保 phrases-data.js 已正确加载</div>';
        return;
    }
    
    let html = '<div class="common-words-section">';
    
    // 目录（TOC）
    const categoryNamesMap = {
        days: '星期',
        months: '月份',
        numbers: '数字',
        counters: '数量词',
        time: '时间',
        basic: '基本词汇',
        travel: '旅行相关',
        food: '食物和饮料',
        shopping: '购物相关',
        body: '身体和健康',
        colors: '颜色',
        weather: '天气'
    };
    
    html += `<div class="toc">
        <div class="toc-header">
            <h3 class="toc-title">📑 目录导航</h3>
            <p class="toc-subtitle">快速跳转到各分类</p>
        </div>
        <div class="toc-inner">`;
    Object.keys(commonWordsData).forEach(cat => {
        html += `<button class="toc-link" data-target="cw-${cat}">${categoryNamesMap[cat] || cat}</button>`;
    });
    html += '</div></div>';
    
    html += '<div class="words-content">';
    Object.keys(commonWordsData).forEach(category => {
        const words = commonWordsData[category];
        
        html += `<div class="word-category" id="cw-${category}">
            <h3 class="word-category-title">${categoryNamesMap[category] || category}</h3>
            <div class="words-grid">`;
        
        words.forEach((word, index) => {
            // 计算全局索引
            let globalIndex = 0;
            let currentIdx = 0;
            for (let cat of Object.keys(commonWordsData)) {
                if (cat === category) {
                    globalIndex = currentIdx + index;
                    break;
                }
                currentIdx += commonWordsData[cat].length;
            }
            
            const progress = getPhraseProgress('commonwords', globalIndex);
            const isMastered = progress === 'mastered';
            
            html += `
                <div class="word-card ${isMastered ? 'mastered' : ''}" data-category="${category}" data-index="${index}">
                    <div class="word-header">
                        <button class="mastery-btn ${isMastered ? 'active' : ''}" 
                                data-category="commonwords" 
                                data-index="${globalIndex}"
                                title="${isMastered ? '标记为未掌握' : '标记为已掌握'}">
                            ${isMastered ? '✓' : '○'}
                        </button>
                    </div>
                    <div class="word-content">
                        <div class="word-japanese-wrapper">
                            <div class="word-japanese">${word.japanese}</div>
                            <button class="play-btn" data-text="${word.japanese}" title="播放发音">
                                <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                        <div class="word-furigana ${showFurigana ? 'visible' : ''}" style="display: ${showFurigana ? 'block' : 'none'}">${word.furigana}</div>
                        <div class="word-chinese ${showChinese ? '' : 'hidden'}" style="display: ${showChinese ? 'block' : 'none'}">${word.chinese}</div>
                    </div>
                </div>
            `;
        });
        
        html += '</div></div>';
    });
    
    html += '</div></div>'; // 关闭 words-content 和 common-words-section
    container.innerHTML = html;
    
    // 附加事件监听器
    document.querySelectorAll('.toc .toc-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-target');
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    container.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playPronunciation(btn.dataset.text);
    });
});

    container.querySelectorAll('.mastery-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const index = parseInt(btn.dataset.index);
            const currentProgress = getPhraseProgress(category, index);
            const newStatus = currentProgress === 'mastered' ? 'not_mastered' : 'mastered';
            setPhraseProgress(category, index, newStatus);
            renderPhrases();
        });
    });
}

// 初始化测试模式
function initializeTest() {
    testMode.category = currentCategory;
    testMode.index = 0;
    showTestPhrase();
}

// 显示测试短语（增加难度：初始不显示中文）
function showTestPhrase() {
    // 测试模式不支持常用词
    if (testMode.category === 'commonwords') {
        testMode.category = 'greetings';
        testMode.index = 0;
    }
    
    if (typeof phrasesData === 'undefined' || !phrasesData[testMode.category]) {
        return;
    }
    const phrases = phrasesData[testMode.category];
    const phrase = phrases[testMode.index];
    const progress = getPhraseProgress(testMode.category, testMode.index);
    
    // 隐藏答案（增加难度）
    document.getElementById('test-furigana').style.display = 'none';
    document.getElementById('test-chinese').style.display = 'none';
    document.getElementById('show-answer-btn').style.display = 'block';
    document.getElementById('test-chinese').classList.remove('visible');
    
    document.getElementById('test-japanese').textContent = phrase.japanese;
    document.getElementById('test-furigana').textContent = phrase.furigana;
    document.getElementById('test-chinese').textContent = phrase.chinese;
    
    // 更新分类名称显示
    const categoryNames = {
        greetings: '问候',
        dining: '用餐',
        shopping: '购物',
        directions: '问路',
        emergency: '紧急情况',
        transportation: '交通',
        convenience: '便利店',
        hotel: '酒店',
        business: '商务',
        commonwords: '常用词'
    };
    
    document.getElementById('test-counter').textContent = `${testMode.index + 1} / ${phrases.length}`;
    document.getElementById('test-category').textContent = categoryNames[testMode.category];
    
    // 更新导航按钮
    document.getElementById('prev-test-btn').disabled = testMode.index === 0;
    document.getElementById('next-test-btn').disabled = testMode.index === phrases.length - 1;
    
    // 更新掌握按钮
    updateTestMasteryButtons(progress);
}

// 更新测试掌握按钮
function updateTestMasteryButtons(progress) {
    const masteredBtn = document.getElementById('mastered-btn');
    const notMasteredBtn = document.getElementById('not-mastered-btn');
    
    if (progress === 'mastered') {
        masteredBtn.classList.add('active');
        notMasteredBtn.classList.remove('active');
    } else {
        masteredBtn.classList.remove('active');
        notMasteredBtn.classList.add('active');
    }
}

// 在测试模式中显示答案
function showAnswer() {
    document.getElementById('test-furigana').style.display = showFurigana ? 'block' : 'none';
    document.getElementById('test-chinese').style.display = 'block';
    document.getElementById('test-chinese').classList.add('visible');
    document.getElementById('show-answer-btn').style.display = 'none';
}

// 切换假名显示
function toggleFurigana() {
    showFurigana = !showFurigana;
    localStorage.setItem('showFurigana', showFurigana);
    
    const toggleBtn = document.getElementById('furigana-toggle');
    toggleBtn.classList.toggle('active', showFurigana);
    
    // 更新学习模式中的所有假名显示
    document.querySelectorAll('.phrase-furigana').forEach(el => {
        if (showFurigana) {
            el.style.display = 'block';
            el.classList.add('visible');
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.remove('visible');
            el.classList.add('hidden');
        }
    });
    
    // 更新常用词的假名显示
    document.querySelectorAll('.word-furigana').forEach(el => {
        if (showFurigana) {
            el.style.display = 'block';
            el.classList.add('visible');
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.remove('visible');
            el.classList.add('hidden');
        }
    });
    
    // 更新已学习内容的假名显示
    document.querySelectorAll('.learned-item-furigana').forEach(el => {
        if (showFurigana) {
            el.style.display = 'block';
            el.classList.add('visible');
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.remove('visible');
            el.classList.add('hidden');
        }
    });
    
    // 更新测试模式假名（如果答案已显示）
    if (currentMode === 'test') {
        const testFurigana = document.getElementById('test-furigana');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        if (showAnswerBtn.style.display === 'none' && testFurigana.textContent) {
            testFurigana.style.display = showFurigana ? 'block' : 'none';
        }
    }
}

// 切换中文显示
function toggleChinese() {
    showChinese = !showChinese;
    localStorage.setItem('showChinese', showChinese);
    
    const toggleBtn = document.getElementById('chinese-toggle');
    toggleBtn.classList.toggle('active', showChinese);
    
    // 更新学习模式中的所有中文显示
    document.querySelectorAll('.phrase-chinese').forEach(el => {
        if (showChinese) {
            el.style.display = 'block';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });
    
    // 更新常用词的中文显示
    document.querySelectorAll('.word-chinese').forEach(el => {
        if (showChinese) {
            el.style.display = 'block';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });
    
    // 更新已学习内容的中文显示
    document.querySelectorAll('.learned-item-chinese').forEach(el => {
        if (showChinese) {
            el.style.display = 'block';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });
    
    // 更新已学习内容的中文显示
    document.querySelectorAll('.learned-item-chinese').forEach(el => {
        if (showChinese) {
            el.style.display = 'block';
            el.classList.remove('hidden');
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    });
    
    // 更新测试模式中文（如果答案已显示）
    if (currentMode === 'test') {
        const testChinese = document.getElementById('test-chinese');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        if (showAnswerBtn.style.display === 'none' && testChinese.textContent) {
            testChinese.style.display = showChinese ? 'block' : 'none';
        }
    }
}

// 显示首页
function showHome() {
    currentMode = 'home';
    document.getElementById('home-mode').classList.add('active');
    document.getElementById('learn-mode').classList.remove('active');
    document.getElementById('test-mode').classList.remove('active');
    document.getElementById('learned-mode').classList.remove('active');
    document.getElementById('category-nav').style.display = 'none';
    document.getElementById('detail-progress').style.display = 'none';
    updateProgressOverview();
    
    // 更新模式按钮
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('learned-btn').classList.remove('active');
}

// 显示学习/测试模式
function showLearningMode(mode) {
    currentMode = mode;
    document.getElementById('home-mode').classList.remove('active');
    document.getElementById('learn-mode').classList.toggle('active', mode === 'learn');
    document.getElementById('test-mode').classList.toggle('active', mode === 'test');
    document.getElementById('learned-mode').classList.remove('active');
    document.getElementById('category-nav').style.display = 'block';
    document.getElementById('detail-progress').style.display = 'flex';
    
    // 更新按钮状态
    document.getElementById('learned-btn').classList.remove('active');
    
    if (mode === 'test') {
        initializeTest();
    } else {
        renderPhrases();
    }
}

// 显示已学习内容
function showLearnedItems() {
    currentMode = 'learned';
    document.getElementById('home-mode').classList.remove('active');
    document.getElementById('learn-mode').classList.remove('active');
    document.getElementById('test-mode').classList.remove('active');
    document.getElementById('learned-mode').classList.add('active');
    document.getElementById('category-nav').style.display = 'none';
    document.getElementById('detail-progress').style.display = 'none';
    
    // 更新按钮状态
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('learned-btn').classList.add('active');
    
    renderLearnedItems();
}

// 渲染已学习内容
function renderLearnedItems() {
    const container = document.getElementById('learned-container');
    const progress = loadProgress();
    const learnedItems = [];
    
    // 收集所有已掌握的短语
    if (typeof phrasesData !== 'undefined') {
        Object.keys(phrasesData).forEach(category => {
            const phrases = phrasesData[category];
            const categoryNames = {
                greetings: '问候',
                dining: '用餐',
                shopping: '购物',
                directions: '问路',
                emergency: '紧急情况',
                transportation: '交通',
                convenience: '便利店',
                hotel: '酒店',
                business: '商务'
            };
            
            phrases.forEach((phrase, index) => {
                const itemProgress = getPhraseProgress(category, index);
                if (itemProgress === 'mastered') {
                    learnedItems.push({
                        type: 'phrase',
                        category: category,
                        categoryName: categoryNames[category] || category,
                        index: index,
                        japanese: phrase.japanese,
                        furigana: phrase.furigana,
                        chinese: phrase.chinese
                    });
                }
            });
        });
    }
    
    // 收集所有已掌握的单词
    if (typeof allCommonWords !== 'undefined' && allCommonWords.length > 0) {
        allCommonWords.forEach((word, globalIndex) => {
            const itemProgress = getPhraseProgress('commonwords', globalIndex);
            if (itemProgress === 'mastered') {
                learnedItems.push({
                    type: 'word',
                    category: '常用单词',
                    categoryName: '常用单词',
                    index: globalIndex,
                    japanese: word.japanese,
                    furigana: word.furigana,
                    chinese: word.chinese
                });
            }
        });
    }
    
    // 更新计数
    document.getElementById('learned-total').textContent = learnedItems.length;
    
    if (learnedItems.length === 0) {
        container.innerHTML = `
            <div class="empty-learned">
                <p class="empty-message">还没有已学习的内容</p>
                <p class="empty-hint">标记为"已掌握"的内容将显示在这里</p>
            </div>
        `;
        return;
    }
    
    // 按分类分组
    const groupedItems = {};
    learnedItems.forEach(item => {
        if (!groupedItems[item.categoryName]) {
            groupedItems[item.categoryName] = [];
        }
        groupedItems[item.categoryName].push(item);
    });
    
    // 渲染已学习内容
    let html = '';
    Object.keys(groupedItems).sort().forEach(categoryName => {
        const items = groupedItems[categoryName];
        html += `
            <div class="learned-category">
                <h3 class="learned-category-title">${categoryName} <span class="learned-category-count">(${items.length})</span></h3>
                <div class="learned-items-grid">
        `;
        
        items.forEach(item => {
            html += `
                <div class="learned-item-card">
                    <div class="learned-item-header">
                        <span class="learned-item-type">${item.type === 'phrase' ? '短语' : '单词'}</span>
                        <button class="mastery-btn active" 
                                data-category="${item.category}" 
                                data-index="${item.index}"
                                data-type="${item.type}"
                                title="标记为未掌握">
                            ✓
                        </button>
                    </div>
                    <div class="learned-item-content">
                        <div class="learned-item-japanese-wrapper">
                            <div class="learned-item-japanese">${item.japanese}</div>
                            <button class="play-btn" data-text="${item.japanese}" title="播放发音">
                                <svg class="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                        <div class="learned-item-furigana ${showFurigana ? 'visible' : ''}" style="display: ${showFurigana ? 'block' : 'none'}">${item.furigana}</div>
                        <div class="learned-item-chinese ${showChinese ? '' : 'hidden'}" style="display: ${showChinese ? 'block' : 'none'}">${item.chinese}</div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // 附加事件监听器
    container.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playPronunciation(btn.dataset.text);
        });
    });
    
    container.querySelectorAll('.mastery-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.dataset.category;
            const index = parseInt(btn.dataset.index);
            const type = btn.dataset.type;
            
            setPhraseProgress(category, index, 'not_mastered');
            
            // 重新渲染已学习内容
            renderLearnedItems();
            
            // 如果当前在相应分类的学习模式，更新显示
            if (currentMode === 'learn' && currentCategory === category) {
                renderPhrases();
                updateProgressOverview();
            }
        });
    });
}

// 初始化事件监听器
function initializeEventListeners() {
    // 首页按钮
    document.getElementById('home-btn').addEventListener('click', showHome);
    
    // 已学习按钮
    document.getElementById('learned-btn').addEventListener('click', showLearnedItems);
    
    // 假名切换
    document.getElementById('furigana-toggle').addEventListener('click', toggleFurigana);
    
    // 中文切换
    document.getElementById('chinese-toggle').addEventListener('click', toggleChinese);
    
    // 语音信息按钮
    const voiceInfoBtn = document.getElementById('voice-info-btn');
    if (voiceInfoBtn) {
        voiceInfoBtn.addEventListener('click', showVoiceInfo);
    }
    
    
    // 模式切换
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showLearningMode(mode);
        });
    });
    
    // 分类卡片点击（首页）
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            currentCategory = category;
            
            // 激活对应的分类按钮
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === category);
            });
            
            // 切换到学习模式
            showLearningMode('learn');
            document.querySelector('.mode-btn[data-mode="learn"]').classList.add('active');
        });
    });
    
    // 分类切换
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            
            if (currentMode === 'learn') {
                renderPhrases();
            } else if (currentMode === 'test') {
                initializeTest();
            }
        });
    });
    
    // 测试模式控制
    document.getElementById('play-audio-btn').addEventListener('click', () => {
        if (testMode.category === 'commonwords') return;
        if (typeof phrasesData === 'undefined' || !phrasesData[testMode.category]) return;
        const phrases = phrasesData[testMode.category];
        const phrase = phrases[testMode.index];
        playPronunciation(phrase.japanese);
    });
    
    document.getElementById('show-answer-btn').addEventListener('click', showAnswer);
    
    document.getElementById('mastered-btn').addEventListener('click', () => {
        setPhraseProgress(testMode.category, testMode.index, 'mastered');
        updateTestMasteryButtons('mastered');
        updateProgressOverview();
    });
    
    document.getElementById('not-mastered-btn').addEventListener('click', () => {
        setPhraseProgress(testMode.category, testMode.index, 'not_mastered');
        updateTestMasteryButtons('not_mastered');
        updateProgressOverview();
    });
    
    document.getElementById('prev-test-btn').addEventListener('click', () => {
        if (testMode.index > 0) {
            testMode.index--;
            showTestPhrase();
        }
    });
    
    document.getElementById('next-test-btn').addEventListener('click', () => {
        if (testMode.category === 'commonwords') return;
        if (typeof phrasesData === 'undefined' || !phrasesData[testMode.category]) return;
        const phrases = phrasesData[testMode.category];
        if (testMode.index < phrases.length - 1) {
            testMode.index++;
            showTestPhrase();
        }
    });
}

// 初始化应用
function init() {
    // 检查数据是否已加载
    if (ensureDataLoaded()) {
        initializeEventListeners();
        updateProgressOverview();
        showHome();
    } else {
        // 延迟初始化，等待外部数据加载
        let attempts = 0;
        const maxAttempts = 10;
        const checkData = setInterval(() => {
            attempts++;
            if (ensureDataLoaded() || attempts >= maxAttempts) {
                clearInterval(checkData);
                if (ensureDataLoaded()) {
                    initializeEventListeners();
                    updateProgressOverview();
                    showHome();
                } else {
                    console.error('数据文件未正确加载，请检查 phrases-data.js 是否在 script.js 之前加载');
                    document.body.innerHTML = '<div style="padding: 2rem; text-align: center;"><h1>数据加载失败</h1><p>请确保 phrases-data.js 文件存在且已正确加载</p></div>';
                }
            }
        }, 100);
    }
}

// 页面加载时运行
document.addEventListener('DOMContentLoaded', init);