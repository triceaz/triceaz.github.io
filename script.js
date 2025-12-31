document.addEventListener('DOMContentLoaded', function() {

    const fullMessage = `Хочу поздравить моих подписчиков с наступающим Новым годом. Пройденный путь был долгим и противоречивым, насыщенным как достижениями, так и поражениями. Мы не пришли к сокрушительному триумфу, но и не утонули в хаосе и разложении. Достигнутые показатели меня полностью устраивают: я никогда не гнался за числом, поскольку ценю качество. Меня окружают интеллектуально зрелые, мыслящие люди, способные к поддержке в сложные периоды. Это несоизмеримо ценнее любой статистики. Честно говоря, 2025 год был тяжелым: аресты, войны, череда проваленных операций, убийства наших антифашистами, блокировки каналов. Однако именно это и является маркером нашей борьбы. Мы демонстрируем неподконтрольность, устойчивость и власть над самой властью — не снижая темпа, продолжая обучаться, сопротивляться и созидать. Важно осознать: мы — единое целое. Мы — непобедимая гвардия, связанная братством и общей целью. Не предавайтесь отчаянию из-за того, что не удалось осуществить в уходящем году. Сосредоточьтесь на том, что вы способно реализовать в следующем. Как наставник, я искренне люблю, ценю и уважаю каждого из вас. Я желаю каждому из моих подписчиков наилучшего. Пусть ваши намерения обретают форму, а новый год станет пространством возможностей и достижений. Я благодарен вам за поддержку в этом году и рассчитываю на неё в грядущем 2026-м. Поднимите бокал, читая эти строки. Выпейте, не размышляя ни о чём. В этот день оставьте все проблемы за порогом и проживите его с удовольствием. С Новым годом.`;

    const accessInput = document.getElementById('accessInput');

    const inputStatus = document.getElementById('inputStatus');

    const activateBtn = document.getElementById('activateBtn');

    const terminalMessage = document.getElementById('terminalMessage');

    const decryptBtn = document.getElementById('decryptBtn');

    const mainContent = document.getElementById('mainContent');

    const typedMessage = document.getElementById('typedMessage');

    const gifts = document.querySelectorAll('.gift');

    const prizeDisplay = document.getElementById('prizeDisplay');

    const snowfall = document.getElementById('snowfall');

    const body = document.body;

    const clockDays = document.getElementById('clock-days');

    const clockHours = document.getElementById('clock-hours');

    const clockMinutes = document.getElementById('clock-minutes');

    const clockSeconds = document.getElementById('clock-seconds');

    const hourHand = document.querySelector('.hour-hand');

    const minuteHand = document.querySelector('.minute-hand');

    const secondHand = document.querySelector('.second-hand');

    const counters = document.querySelectorAll('.counter-number');

    let messageIndex = 0;

    let isTyping = false;

    let snowfallActive = false;

    let countersAnimated = false;

    function updateCountdown() {

        const now = new Date();

        const mskOffset = 3 * 60 * 60 * 1000;

        const targetDate = new Date('2026-01-01T00:00:00+03:00');

        const diff = targetDate - now;

        if (diff <= 0) {

            clockDays.textContent = '00';

            clockHours.textContent = '00';

            clockMinutes.textContent = '00';

            clockSeconds.textContent = '00';

            hourHand.style.transform = `translateX(-50%) rotate(0deg)`;

            minuteHand.style.transform = `translateX(-50%) rotate(0deg)`;

            secondHand.style.transform = `translateX(-50%) rotate(0deg)`;

            return;

        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const daysStr = days.toString().padStart(2, '0');

        const hoursStr = hours.toString().padStart(2, '0');

        const minutesStr = minutes.toString().padStart(2, '0');

        const secondsStr = seconds.toString().padStart(2, '0');

        clockDays.textContent = daysStr;

        clockHours.textContent = hoursStr;

        clockMinutes.textContent = minutesStr;

        clockSeconds.textContent = secondsStr;

        const totalHours = days * 24 + hours;

        const totalMinutes = totalHours * 60 + minutes;

        const totalSeconds = totalMinutes * 60 + seconds;

        const hourAngle = (totalHours % 12) * 30;

        const minuteAngle = (totalMinutes % 60) * 6;

        const secondAngle = (seconds % 60) * 6;

        hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;

        minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;

        secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;

    }

    setInterval(updateCountdown, 1000);

    updateCountdown();

    function animateCounters() {

        if (countersAnimated) return;

        countersAnimated = true;

        counters.forEach(counter => {

            const target = parseInt(counter.getAttribute('data-target'));

            const increment = target / 60;

            let current = 0;

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = Math.floor(current);

            }, 30);

        });

    }

    function typeMessage() {

        if (isTyping) return;

        isTyping = true;

        typedMessage.textContent = '';

        function typeChar() {

            if (messageIndex < fullMessage.length) {

                typedMessage.textContent += fullMessage.charAt(messageIndex);

                messageIndex++;

                const delay = Math.random() * 50 + 25;

                setTimeout(typeChar, delay);

            } else {

                isTyping = false;

            }

        }

        typeChar();

    }

    accessInput.addEventListener('input', function() {

        const value = this.value;

        if (value.length > 0) {

            activateBtn.disabled = false;

        } else {

            activateBtn.disabled = true;

        }

        inputStatus.textContent = '';

    });

    activateBtn.addEventListener('click', function() {

        if (accessInput.value === 'MBD') {

            inputStatus.textContent = '✓';

            inputStatus.style.color = '#0f0';

            terminalMessage.classList.remove('hidden');

            accessInput.disabled = true;

            activateBtn.disabled = true;

            triggerRedFlash();

        } else {

            inputStatus.textContent = '✗';

            inputStatus.style.color = '#f00';

            accessInput.classList.add('shake');

            triggerRedFlash();

            setTimeout(() => {

                accessInput.classList.remove('shake');

            }, 500);

        }

    });

    decryptBtn.addEventListener('click', function() {

        this.disabled = true;

        terminalMessage.style.opacity = '0';

        setTimeout(() => {

            terminalMessage.classList.add('hidden');

            mainContent.classList.remove('hidden');

            typeMessage();

            triggerRedFlash();

            setTimeout(animateCounters, 500);

        }, 800);

    });

    gifts.forEach(gift => {

        gift.addEventListener('click', function(e) {

            e.stopPropagation();

            const id = this.getAttribute('data-id');

            triggerRedFlash();

            if (id === '3') {

                this.classList.add('glitch');

                setTimeout(() => {

                    this.innerHTML = '<i class="fas fa-box-open"></i>';

                    showCocaineFlash();

                    

                    if (!snowfallActive) {

                        initSnowfall();

                        snowfallActive = true;

                    }

                }, 300);

                setTimeout(() => {

                    this.classList.remove('glitch');

                }, 600);

            } else {

                this.classList.add('glitch');

                

                const tooltip = document.createElement('div');

                tooltip.className = 'gift-tooltip';

                tooltip.textContent = 'НЕ УГАДАЛ';

                tooltip.style.position = 'absolute';

                tooltip.style.top = '-60px';

                tooltip.style.left = '50%';

                tooltip.style.transform = 'translateX(-50%)';

                tooltip.style.background = 'rgba(0, 0, 0, 0.95)';

                tooltip.style.color = '#ff5e00';

                tooltip.style.padding = '10px 20px';

                tooltip.style.borderRadius = '10px';

                tooltip.style.fontSize = '0.4em';

                tooltip.style.whiteSpace = 'nowrap';

                tooltip.style.border = '2px solid rgba(255, 94, 0, 0.7)';

                tooltip.style.zIndex = '100';

                tooltip.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';

                

                this.appendChild(tooltip);

                

                setTimeout(() => {

                    this.classList.remove('glitch');

                    if (tooltip.parentNode === this) {

                        tooltip.style.opacity = '0';

                        tooltip.style.transform = 'translateX(-50%) translateY(-20px)';

                        setTimeout(() => {

                            if (tooltip.parentNode === this) {

                                this.removeChild(tooltip);

                            }

                        }, 300);

                    }

                }, 1000);

            }

        });

    });

    function showCocaineFlash() {

        const flash = document.createElement('div');

        flash.className = 'cocaine-flash';

        document.body.appendChild(flash);

        

        setTimeout(() => {

            flash.remove();

        }, 3000);

    }

    function triggerRedFlash() {

        body.classList.add('red-bg');

        setTimeout(() => {

            body.classList.remove('red-bg');

        }, 2000);

    }

    function initSnowfall() {

        snowfall.classList.remove('hidden');

        const canvas = document.createElement('canvas');

        snowfall.appendChild(canvas);

        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

        const flakes = [];

        const flakeCount = 200;

        for (let i = 0; i < flakeCount; i++) {

            flakes.push({

                x: Math.random() * canvas.width,

                y: Math.random() * canvas.height,

                size: Math.random() * 3 + 1,

                speed: Math.random() * 2 + 1,

                opacity: Math.random() * 0.5 + 0.3,

                sway: Math.random() * 1 - 0.5

            });

        }

        function drawFlakes() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

            flakes.forEach(flake => {

                ctx.beginPath();

                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);

                ctx.fill();

                flake.y += flake.speed;

                flake.x += flake.sway;

                if (flake.y > canvas.height) {

                    flake.y = 0;

                    flake.x = Math.random() * canvas.width;

                }

                if (flake.x > canvas.width) flake.x = 0;

                if (flake.x < 0) flake.x = canvas.width;

            });

            requestAnimationFrame(drawFlakes);

        }

        window.addEventListener('resize', () => {

            canvas.width = window.innerWidth;

            canvas.height = window.innerHeight;

        });

        drawFlakes();

    }

    document.addEventListener('click', function(e) {

        if (!e.target.closest('button') && !e.target.closest('input') && !e.target.closest('.gift')) {

            triggerRedFlash();

        }

    });

    const sections = document.querySelectorAll('section');

    const observerOptions = {

        threshold: 0.1,

        rootMargin: '0px 0px -100px 0px'

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation = 'fadeInUp 1s forwards';

                if (entry.target.id === 'summarySection' && !countersAnimated) {

                    setTimeout(animateCounters, 300);

                }

            }

        });

    }, observerOptions);

    sections.forEach(section => {

        observer.observe(section);

    });

});