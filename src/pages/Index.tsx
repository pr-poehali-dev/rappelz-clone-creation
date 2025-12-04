const Index = () => {
  const scrollToSection = (section: string) => {
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

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
        </div>
      </section>

      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="classes" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="news" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="rating" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="community" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="shop" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-4">
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 RAPPELZ</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
