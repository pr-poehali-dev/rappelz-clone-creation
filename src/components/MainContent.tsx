interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
      case 'about-game':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              О игре
            </h1>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-shadow-dark">
                Добро пожаловать в мир фэнтезийной MMORPG! Погрузитесь в эпические приключения,
                сражайтесь с могущественными противниками и станьте легендой.
              </p>
              <p className="text-shadow-dark">
                Исследуйте огромный открытый мир, полный тайн и опасностей. Объединяйтесь с другими
                игроками, создавайте гильдии и участвуйте в масштабных PvP-сражениях.
              </p>
              <p className="text-shadow-dark">
                Выбирайте из множества классов персонажей, развивайте уникальные навыки и создавайте
                свой неповторимый стиль игры.
              </p>
            </div>
          </div>
        );
      
      case 'about-world':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Мир игры
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Огромный фэнтезийный мир, полный волшебства, древних руин и могущественных существ.
              Каждая локация имеет свою историю и уникальные особенности.
            </p>
          </div>
        );
      
      case 'about-classes':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Классы персонажей
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Воин', 'Маг', 'Лучник', 'Жрец', 'Убийца', 'Рыцарь'].map((className, index) => (
                <div key={index} className="bg-muted/50 border border-border rounded-lg p-4">
                  <h3 className="text-xl font-bold text-accent mb-2 text-shadow-dark">{className}</h3>
                  <p className="text-sm text-muted-foreground text-shadow-dark">
                    Описание класса и его уникальных способностей.
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'news':
      case 'news-updates':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Обновления
            </h1>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-muted/50 border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-accent text-shadow-dark">
                      Новое обновление {item}
                    </h3>
                    <span className="text-sm text-muted-foreground text-shadow-dark">
                      01.12.2024
                    </span>
                  </div>
                  <p className="text-muted-foreground text-shadow-dark">
                    Описание последних изменений и улучшений в игре. Новые функции, баланс классов
                    и исправление ошибок.
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'news-events':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              События
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Предстоящие игровые события, турниры и специальные мероприятия.
            </p>
          </div>
        );
      
      case 'info-guide':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Руководства
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Полезные советы и подробные гайды для начинающих и опытных игроков.
            </p>
          </div>
        );
      
      case 'creatures-pets':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Питомцы
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Информация о доступных питомцах, их способностях и особенностях.
            </p>
          </div>
        );
      
      case 'gallery':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Галерея
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-muted rounded-lg flex items-center justify-center text-4xl">
                  🖼️
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'videos':
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Видео
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Трейлеры, геймплей и обучающие видеоролики.
            </p>
          </div>
        );
      
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold text-accent glow-text mb-6 text-shadow-dark">
              Добро пожаловать
            </h1>
            <p className="text-muted-foreground text-shadow-dark">
              Выберите раздел в меню слева для просмотра информации.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 min-h-[600px]">
      <nav className="text-sm text-muted-foreground mb-6 text-shadow-dark">
        Главная / {activeSection}
      </nav>
      
      {renderContent()}
      
      <div className="mt-8 pt-6 border-t border-border flex justify-center">
        <div className="text-accent text-2xl">✦</div>
      </div>
    </main>
  );
};

export default MainContent;
