import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const classes = [
    { name: 'Воин', icon: 'Sword', description: 'Мастер ближнего боя с мощной защитой', power: 95, defense: 90 },
    { name: 'Маг', icon: 'Sparkles', description: 'Повелитель стихийной магии', power: 100, defense: 60 },
    { name: 'Лучник', icon: 'Target', description: 'Снайпер дальнего боя', power: 85, defense: 70 },
    { name: 'Призыватель', icon: 'Users', description: 'Вызывает существ на помощь', power: 80, defense: 65 },
  ];

  const news = [
    { title: 'Обновление 5.0: Драконья Эра', date: '15 ноября 2024', category: 'Патч' },
    { title: 'Турнир гильдий начнется 20 ноября', date: '10 ноября 2024', category: 'События' },
    { title: 'Новые локации: Пещеры Вечной Ночи', date: '5 ноября 2024', category: 'Контент' },
  ];

  const leaderboard = [
    { rank: 1, name: 'DarkMage777', level: 150, guild: 'Легион Тьмы', power: 25000 },
    { rank: 2, name: 'SwordMaster', level: 148, guild: 'Рыцари Света', power: 24500 },
    { rank: 3, name: 'ArrowQueen', level: 147, guild: 'Лесные Стражи', power: 24200 },
    { rank: 4, name: 'FireWizard', level: 145, guild: 'Алые Маги', power: 23800 },
    { rank: 5, name: 'IceKnight', level: 144, guild: 'Ледяной Трон', power: 23500 },
  ];

  const marketItems = [
    { name: 'Меч Дракона', price: '5000 золота', rarity: 'Легендарный', icon: 'Sword' },
    { name: 'Кристалл Магии', price: '3500 золота', rarity: 'Эпический', icon: 'Gem' },
    { name: 'Лук Ветра', price: '4200 золота', rarity: 'Легендарный', icon: 'Target' },
    { name: 'Зелье Силы', price: '500 золота', rarity: 'Обычный', icon: 'FlaskConical' },
  ];

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

      <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">О МИРЕ RAPPELZ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-magic border-primary/30 hover:glow-border transition-all">
              <CardHeader>
                <Icon name="Swords" size={48} className="text-primary mx-auto mb-4 animate-float" />
                <CardTitle className="text-center">Эпические сражения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Участвуйте в масштабных PvP и PvE битвах против драконов, демонов и других игроков</p>
              </CardContent>
            </Card>
            <Card className="gradient-magic border-primary/30 hover:glow-border transition-all">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4 animate-float" />
                <CardTitle className="text-center">Гильдии и союзы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Создавайте гильдии, объединяйтесь с друзьями и завоевывайте территории</p>
              </CardContent>
            </Card>
            <Card className="gradient-magic border-primary/30 hover:glow-border transition-all">
              <CardHeader>
                <Icon name="Gem" size={48} className="text-primary mx-auto mb-4 animate-float" />
                <CardTitle className="text-center">Экономика и торговля</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Развитая система торговли между игроками и уникальный игровой магазин</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ВЫБЕРИТЕ СВОЙ КЛАСС</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => (
              <Card key={index} className="hover:glow-border transition-all hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center">
                  <Icon name={cls.icon as any} size={64} className="text-primary mx-auto mb-4 group-hover:animate-float" />
                  <CardTitle className="text-2xl">{cls.name}</CardTitle>
                  <CardDescription>{cls.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Сила:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${cls.power}%` }}></div>
                        </div>
                        <span className="text-sm font-bold">{cls.power}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Защита:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${cls.defense}%` }}></div>
                        </div>
                        <span className="text-sm font-bold">{cls.defense}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ПОСЛЕДНИЕ НОВОСТИ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:glow-border transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={item.category === 'Патч' ? 'default' : 'secondary'}>
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rating" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">РЕЙТИНГ ИГРОКОВ</h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <Tabs defaultValue="power" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="power">По силе</TabsTrigger>
                  <TabsTrigger value="level">По уровню</TabsTrigger>
                  <TabsTrigger value="guild">По гильдиям</TabsTrigger>
                </TabsList>
                <TabsContent value="power" className="mt-6">
                  <div className="space-y-4">
                    {leaderboard.map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`text-2xl font-bold ${player.rank === 1 ? 'text-accent' : player.rank === 2 ? 'text-secondary' : player.rank === 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                            #{player.rank}
                          </div>
                          <div>
                            <div className="font-bold text-lg">{player.name}</div>
                            <div className="text-sm text-muted-foreground">{player.guild}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{player.power.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Ур. {player.level}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="level">
                  <p className="text-center text-muted-foreground py-8">Рейтинг по уровням загружается...</p>
                </TabsContent>
                <TabsContent value="guild">
                  <p className="text-center text-muted-foreground py-8">Рейтинг гильдий загружается...</p>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="community" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">СООБЩЕСТВО</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:glow-border transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Форум</CardTitle>
                <CardDescription>15,234 игроков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:glow-border transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Discord</CardTitle>
                <CardDescription>8,942 участников</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:glow-border transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Video" size={48} className="text-primary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>YouTube</CardTitle>
                <CardDescription>22,156 подписчиков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:glow-border transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Share2" size={48} className="text-primary mx-auto mb-2 group-hover:animate-float" />
                <CardTitle>Соц. сети</CardTitle>
                <CardDescription>Подписаться</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="shop" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">ИГРОВОЙ МАГАЗИН</h2>
          <div className="mb-8 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/24a323a8-04ae-4aee-83ae-070dfc266fbf/files/86ad0747-fbfd-4006-922b-7ead0026f020.jpg"
              alt="Marketplace"
              className="w-full max-w-3xl mx-auto rounded-lg glow-border"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketItems.map((item, index) => (
              <Card key={index} className="hover:glow-border transition-all hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <Icon name={item.icon as any} size={48} className="text-accent mx-auto mb-2" />
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant={item.rarity === 'Легендарный' ? 'default' : 'secondary'}>
                    {item.rarity}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xl font-bold text-accent mb-4">{item.price}</p>
                  <Button className="w-full">Купить</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Торговля между игроками доступна с 10 уровня</p>
            <Button size="lg" variant="outline">
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Открыть аукцион
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 glow-text">СВЯЗАТЬСЯ С НАМИ</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Поддержка игроков</CardTitle>
              <CardDescription>Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Введите имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@mail.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Опишите ваш вопрос..." rows={5} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
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
