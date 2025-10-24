import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'cases', 'portfolio', 'about', 'team', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Target',
      title: 'Таргетированная реклама',
      description: 'Точное попадание в вашу целевую аудиторию через социальные сети и поисковые системы'
    },
    {
      icon: 'Lightbulb',
      title: 'Креативные концепции',
      description: 'Разработка уникальных рекламных кампаний, которые выделят ваш бренд среди конкурентов'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и оптимизация',
      description: 'Глубокий анализ данных и постоянная оптимизация для максимальной эффективности'
    },
    {
      icon: 'Megaphone',
      title: 'SMM продвижение',
      description: 'Комплексное управление социальными сетями и построение сообщества вокруг бренда'
    }
  ];

  const cases = [
    {
      title: 'Запуск нового продукта',
      client: 'Tech Startup',
      result: '+350% продаж за 3 месяца',
      color: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Ребрендинг компании',
      client: 'Retail Chain',
      result: '+120% узнаваемости бренда',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Digital-трансформация',
      client: 'Manufacturing',
      result: 'ROI 280%',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const team = [
    { name: 'Анна Смирнова', role: 'Креативный директор', experience: '8 лет' },
    { name: 'Дмитрий Волков', role: 'Head of Performance', experience: '6 лет' },
    { name: 'Елена Морозова', role: 'Lead Designer', experience: '7 лет' },
    { name: 'Михаил Соколов', role: 'Data Analyst', experience: '5 лет' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-purple-50/30">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">AE</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                  АРТ ЭРА
                </h1>
                <p className="text-xs text-gray-600">Advertising Technologies</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'services', 'cases', 'portfolio', 'about', 'team', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === section
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'cases' && 'Кейсы'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О нас'}
                  {section === 'team' && 'Команда'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:shadow-lg transition-all duration-300">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
                <span className="text-orange-600 font-medium text-sm">5 лет в рекламных технологиях</span>
              </div>
              <h1 className="font-heading font-black text-6xl lg:text-7xl mb-6 leading-tight">
                Создаём
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  будущее рекламы
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Наша компания предлагает комплексные рекламные услуги.
                От разработки дизайна до печати промо материалов и организации мероприятий!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('contacts')}
                >
                  Начать проект
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
                  onClick={() => scrollToSection('cases')}
                >
                  Наши кейсы
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-float"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Icon name="TrendingUp" size={32} className="text-orange-500 mb-3" />
                  <h3 className="font-heading font-bold text-3xl mb-1">150+</h3>
                  <p className="text-gray-600 text-sm">Успешных проектов</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                  <Icon name="Users" size={32} className="text-purple-600 mb-3" />
                  <h3 className="font-heading font-bold text-3xl mb-1">50+</h3>
                  <p className="text-gray-600 text-sm">Довольных клиентов</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Icon name="Zap" size={32} className="text-orange-500 mb-3" />
                  <h3 className="font-heading font-bold text-3xl mb-1">5</h3>
                  <p className="text-gray-600 text-sm">Лет на рынке</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-black text-5xl mb-4">
              Наши <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для роста вашего бизнеса в цифровой среде
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-0 bg-gradient-to-br from-white to-gray-50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-gradient-to-br from-orange-50/50 to-purple-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-black text-5xl mb-4">
              Кейсы <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">успеха</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Результаты, которыми мы гордимся
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden group cursor-pointer border-0 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading font-bold text-2xl text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="TrendingUp" size={20} className="text-orange-500" />
                    <span className="font-heading font-bold text-xl">{item.result}</span>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-black text-5xl mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">Портфолио</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Визуальная история наших проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="aspect-square rounded-2xl bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-500/80 to-purple-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Icon name="Eye" size={48} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gradient-to-br from-orange-50/50 to-purple-50/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-heading font-black text-5xl mb-6">
                О <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">нас</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-orange-500">Арт Эра</strong> — агентство рекламных технологий, 
                  которое уже 5 лет создаёт инновационные решения для амбициозных брендов.
                </p>
                <p>
                  Мы не просто запускаем рекламу — мы создаём технологичные экосистемы роста, где каждый элемент 
                  работает на достижение ваших бизнес-целей.
                </p>
                <p>
                  Наша философия: смелые креативные решения + точная аналитика = 
                  измеримый рост вашего бизнеса.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <Icon name="Rocket" size={32} className="text-orange-500 mb-3" />
                  <h3 className="font-heading font-bold text-xl mb-2">Инновации</h3>
                  <p className="text-gray-600">Всегда на шаг впереди технологий</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <Icon name="Heart" size={32} className="text-purple-600 mb-3" />
                  <h3 className="font-heading font-bold text-xl mb-2">Страсть</h3>
                  <p className="text-gray-600">Каждый проект — с душой</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative p-8 bg-white/80 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Миссия</h4>
                      <p className="text-gray-600">Делать бренды заметными в цифровом мире</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Eye" size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Видение</h4>
                      <p className="text-gray-600">Стать #1 рекламным агентством технологий</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Star" size={32} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg mb-1">Ценности</h4>
                      <p className="text-gray-600">Честность, качество, результат</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading font-black text-5xl mb-4">
              Наша <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">команда</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы, которые создают результаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-purple-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Icon name="Mail" size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">Опыт: {member.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-heading font-black text-5xl lg:text-6xl mb-6 text-white">
              Готовы создать что-то крутое?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Свяжитесь с нами, и мы разработаем стратегию, которая выведет ваш бренд на новый уровень
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                info@artera.ru
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30 hover:shadow-2xl transition-all duration-300"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (495) 123-45-67
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              {['Instagram', 'Facebook', 'Linkedin', 'Twitter'].map((social) => (
                <button
                  key={social}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Icon name={social as any} size={20} className="text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">AE</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">АРТ ЭРА</h3>
                  <p className="text-xs text-gray-400">Advertising Technologies</p>
                </div>
              </div>
              <p className="text-gray-400">
                Создаём будущее рекламы вместе с вами
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                {['Услуги', 'Кейсы', 'Портфолио', 'О нас', 'Команда'].map((item) => (
                  <button key={item} className="block text-gray-400 hover:text-orange-500 transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Москва, ул. Тверская, 1</p>
                <p>info@artera.ru</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Арт Эра. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;