import { Component, OnInit, AfterViewInit, HostListener, signal } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  protected readonly title = signal('PortfoliOS');
  menuOpen = false;
  scrolled = false;
  activeSection = 'hero';

  projects = [
    {
      icon: '🏋️',
      name: 'FitTrack Pro',
      description:
        'AI-powered workout tracker with real-time motion analysis using CoreML and ARKit. 50K+ downloads on App Store.',
      tags: ['SwiftUI', 'CoreML', 'ARKit', 'HealthKit'],
      color: '#FF6B6B',
      link: '#',
    },
    {
      icon: '🎵',
      name: 'Melodia',
      description:
        'Music discovery app with personalized recommendations and seamless Apple Music integration using MusicKit.',
      tags: ['SwiftUI', 'MusicKit', 'Core Data', 'CloudKit'],
      color: '#A78BFA',
      link: '#',
    },
    {
      icon: '💰',
      name: 'Penny Wise',
      description:
        'Smart budgeting app with ML-based expense categorization and iCloud sync across all Apple devices.',
      tags: ['UIKit', 'Core Data', 'CloudKit', 'Charts'],
      color: '#34D399',
      link: '#',
    },
    {
      icon: '📸',
      name: 'LensAI',
      description:
        'Professional photo editing suite powered by Core Image and Vision framework with custom ML models.',
      tags: ['SwiftUI', 'Core Image', 'Vision', 'Metal'],
      color: '#FB923C',
      link: '#',
    },
    {
      icon: '🗺️',
      name: 'RouteIQ',
      description:
        'Intelligent navigation with offline maps, augmented reality waypoints, and live activity integration.',
      tags: ['MapKit', 'ARKit', 'ActivityKit', 'CoreLocation'],
      color: '#38BDF8',
      link: '#',
    },
    {
      icon: '🔐',
      name: 'VaultKit',
      description:
        'Secure password manager leveraging Face ID, Keychain Services, and end-to-end encryption.',
      tags: ['UIKit', 'LocalAuthentication', 'CryptoKit', 'iCloud'],
      color: '#F472B6',
      link: '#',
    },
  ];

  skills = [
    { name: 'Swift', level: 98, icon: '🦅' },
    { name: 'SwiftUI', level: 95, icon: '🎨' },
    { name: 'UIKit', level: 92, icon: '📱' },
    { name: 'Objective-C', level: 75, icon: '🔧' },
    { name: 'Xcode', level: 97, icon: '🛠️' },
    { name: 'Core Data', level: 88, icon: '🗄️' },
    { name: 'Core ML', level: 82, icon: '🤖' },
    { name: 'ARKit', level: 78, icon: '🥽' },
    { name: 'CloudKit', level: 85, icon: '☁️' },
    { name: 'TestFlight', level: 93, icon: '✈️' },
    { name: 'Instruments', level: 87, icon: '📊' },
    { name: 'Git / CI/CD', level: 90, icon: '⚙️' },
  ];

  experience = [
    {
      role: 'Senior iOS Engineer',
      company: 'Apple Developer Ecosystem',
      period: '2022 – Present',
      desc: 'Lead iOS development for consumer-facing apps, mentoring a team of 4 engineers. Shipped 3 major apps with combined 200K+ downloads.',
      color: '#007AFF',
    },
    {
      role: 'iOS Developer',
      company: 'TechVentures Studio',
      period: '2020 – 2022',
      desc: 'Built and launched 5 iOS applications from scratch. Integrated payment systems, push notifications, and third-party APIs.',
      color: '#A78BFA',
    },
    {
      role: 'Junior iOS Developer',
      company: 'StartupLab',
      period: '2018 – 2020',
      desc: 'Developed features for an e-commerce iOS app reaching 10K users. Focused on UI performance and Objective-C to Swift migration.',
      color: '#34D399',
    },
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 60;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        this.activeSection = id;
        break;
      }
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initIntersectionObserver();
    this.animateSkillBars();
    this.createParticles();
  }

  initIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.observe(el);
    });
  }

  animateSkillBars() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
              bar.style.width = level + '%';
            }, 200);
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.skill-bar-fill').forEach((el) => observer.observe(el));
  }

  createParticles() {
    const container = document.querySelector('.particles') as HTMLElement;
    if (!container) return;
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = Math.random() * 6 + 6 + 's';
      p.style.width = p.style.height = Math.random() * 4 + 2 + 'px';
      container.appendChild(p);
    }
  }

  scrollTo(id: string) {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
