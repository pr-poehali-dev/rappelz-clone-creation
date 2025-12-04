import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="w-48 h-20 relative">
              <img 
                src="https://cdn.poehali.dev/projects/24a323a8-04ae-4aee-83ae-070dfc266fbf/files/de9801b2-d351-4fa7-bbf3-5b7625ba585b.jpg" 
                alt="Game Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-2 rounded font-bold transition-colors">
              <Icon name="UserPlus" size={18} />
              Регистрация
            </button>
            
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded font-bold transition-colors">
              <Icon name="Download" size={18} />
              Скачать
            </button>
            
            <button className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2 rounded font-bold transition-colors">
              <Icon name="CreditCard" size={18} />
              Пополнить
            </button>
            
            <button className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-2 rounded font-bold transition-colors">
              <Icon name="ShoppingCart" size={18} />
              Магазин
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-4 pb-3">
          <button className="text-sm text-muted-foreground hover:text-accent transition-colors">
            Вход
          </button>
          <span className="text-muted-foreground">|</span>
          <button className="text-sm text-muted-foreground hover:text-accent transition-colors">
            Личный кабинет
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
