// Enhanced Animation utilities for Dreams2Home website

// Performance-optimized scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add stagger animation for children
        if (entry.target.classList.contains('stagger-children')) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate');
            }, index * 100);
          });
        }
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .fade-in-section'
  );
  animatedElements.forEach(el => observer.observe(el));
};

// Advanced counter animation with easing
export const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOutCubic);
      
      counter.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => animateCounter(entry.target), 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

// Advanced parallax with performance optimization
export const initAdvancedParallax = () => {
  let ticking = false;
  const parallaxElements = document.querySelectorAll('.parallax-element');

  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.dataset.speed) || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Section reveal animations with intersection observer
export const initSectionReveal = () => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Trigger any nested animations
        const nestedAnimations = entry.target.querySelectorAll('[data-animate]');
        nestedAnimations.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('animate');
          }, index * 150);
        });
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });

  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => revealObserver.observe(section));
};

// Typing animation for text elements
export const initTypingAnimation = (element, text, speed = 50) => {
  if (!element) return;
  
  let i = 0;
  element.innerHTML = '';
  element.style.borderRight = '2px solid';
  
  const typeWriter = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed + Math.random() * 50); // Variable speed for natural feel
    } else {
      // Blinking cursor effect
      setTimeout(() => {
        element.style.borderRight = 'none';
      }, 1000);
    }
  };
  
  typeWriter();
};

// Magnetic button effect for interactive elements
export const initMagneticButtons = () => {
  const buttons = document.querySelectorAll('.magnetic-btn, .btn-animated');
  
  buttons.forEach(button => {
    let isHovering = false;
    
    button.addEventListener('mouseenter', () => {
      isHovering = true;
      button.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    button.addEventListener('mousemove', (e) => {
      if (!isHovering) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const intensity = 0.3;
      button.style.transform = `translate(${x * intensity}px, ${y * intensity}px) scale(1.02)`;
    });
    
    button.addEventListener('mouseleave', () => {
      isHovering = false;
      button.style.transform = 'translate(0, 0) scale(1)';
      button.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
};

// Enhanced smooth scroll with custom easing
export const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition - 80;
        const distance = targetPosition - startPosition;
        const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
        
        let start = null;
        
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          
          // Smooth easing function
          const ease = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        
        requestAnimationFrame(step);
      }
    });
  });
};

// Lazy loading for images with fade-in effect
export const initLazyImageLoading = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Create a new image to preload
        const newImg = new Image();
        newImg.onload = () => {
          img.src = img.dataset.src;
          img.classList.remove('skeleton');
          img.classList.add('animate-fade-in');
        };
        newImg.src = img.dataset.src;
        
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px'
  });
  
  images.forEach(img => {
    img.classList.add('skeleton');
    imageObserver.observe(img);
  });
};

// Stagger animations for groups of elements
export const staggerAnimations = (selector, animationClass = 'animate-fade-in-up', delay = 100) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      element.classList.add(animationClass);
    }, index * delay);
  });
};

// Loading animation for page transitions
export const initPageLoader = () => {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      
      setTimeout(() => {
        loader.style.display = 'none';
      }, 300);
    }, 500);
  });
};

// Mouse trail effect
export const initMouseTrail = () => {
  const trail = [];
  const trailLength = 20;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'mouse-trail-dot';
    dot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, #3b82f6, transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: ${1 - i / trailLength};
      transform: scale(${1 - i / trailLength * 0.5});
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  let mouseX = 0, mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  const animateTrail = () => {
    let x = mouseX, y = mouseY;
    
    trail.forEach((dot, index) => {
      const nextDot = trail[index + 1] || trail[0];
      
      dot.style.left = x - 2 + 'px';
      dot.style.top = y - 2 + 'px';
      
      if (nextDot) {
        x += (parseInt(nextDot.style.left) - x) * 0.3;
        y += (parseInt(nextDot.style.top) - y) * 0.3;
      }
    });
    
    requestAnimationFrame(animateTrail);
  };
  
  animateTrail();
};

// Enhanced text reveal animation
export const initTextReveal = () => {
  const textElements = document.querySelectorAll('.text-reveal');
  
  textElements.forEach(element => {
    const text = element.textContent;
    const words = text.split(' ');
    
    element.innerHTML = words.map(word => 
      `<span class="word">${word.split('').map(letter => 
        `<span class="letter">${letter}</span>`
      ).join('')}</span>`
    ).join(' ');
    
    const letters = element.querySelectorAll('.letter');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.style.opacity = '1';
              letter.style.transform = 'translateY(0)';
            }, index * 50);
          });
        }
      });
    });
    
    letters.forEach(letter => {
      letter.style.opacity = '0';
      letter.style.transform = 'translateY(20px)';
      letter.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    observer.observe(element);
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  const init = () => {
    initScrollAnimations();
    animateCounters();
    initAdvancedParallax();
    initSectionReveal();
    initMagneticButtons();
    initSmoothScroll();
    initLazyImageLoading();
    initPageLoader();
    initTextReveal();
    
    // Optional mouse trail (can be disabled for performance)
    // initMouseTrail();
    
    // Add initial animations to visible elements
    setTimeout(() => {
      staggerAnimations('.hero-text', 'animate-fade-in-up', 200);
    }, 500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
};

// Utility functions for manual animation control
export const animateElement = (element, animationClass, delay = 0) => {
  setTimeout(() => {
    element.classList.add(animationClass);
  }, delay);
};

export const createStaggerEffect = (elements, options = {}) => {
  const {
    animationClass = 'animate-fade-in-up',
    delay = 100,
    startDelay = 0
  } = options;
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, startDelay + (index * delay));
  });
};

// Performance monitoring
export const monitorAnimationPerformance = () => {
  if (!('performance' in window)) return;
  
  let frameCount = 0;
  let lastTime = performance.now();
  
  const checkFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      if (fps < 30) {
        console.warn('Low FPS detected:', fps);
        // Optionally disable some animations
        document.documentElement.classList.add('reduce-animations');
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkFPS);
  };
  
  checkFPS();
};

// Auto-initialize when module is imported
if (typeof window !== 'undefined') {
  initAllAnimations();
}
