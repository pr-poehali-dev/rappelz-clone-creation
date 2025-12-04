import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold glow-text">RAPPELZ</h1>
            <div className="flex gap-6">
              {['home', 'about', 'classes', 'news', 'rating', 'community', 'shop', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-primary transition-colors capitalize"
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'about' ? 'Об игре' : 
                   section === 'classes' ? 'Классы' : 
                   section === 'news' ? 'Новости' : 
                   section === 'rating' ? 'Рейтинг' : 
                   section === 'community' ? 'Сообщество' : 
                   section === 'shop' ? 'Магазин' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/24a323a8-04ae-4aee-83ae-070dfc266fbf/files/ed638eb2-4b27-4836-a2f8-cbe912445fae.jpg"
            alt="Fantasy Dragon"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h2 className="text-7xl font-bold mb-6 glow-text">ВОЙДИТЕ В МИР МАГИИ</h2>
          <p className="text-2xl mb-8 text-muted-foreground">Драконы, битвы и легендарные приключения ждут вас</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 glow-border hover:scale-105 transition-transform">
              <Icon name="Download" className="mr-2" size={20} />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">О МИРЕ RAPPELZ</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="classes" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ВЫБЕРИТЕ СВОЙ КЛАСС</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="news" className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ПОСЛЕДНИЕ НОВОСТИ</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="rating" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">РЕЙТИНГ ИГРОКОВ</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="community" className="py-32 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">СООБЩЕСТВО</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="shop" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ИГРОВОЙ МАГАЗИН</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">СВЯЗАТЬСЯ С НАМИ</h2>
          <div className="text-center text-muted-foreground">
            <p className="text-xl">Содержимое раздела</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2024 RAPPELZ. Все права защищены.</p>
          <p className="text-sm">Окунитесь в мир магии, драконов и эпических приключений</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
