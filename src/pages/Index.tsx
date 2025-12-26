import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const services = [
    {
      icon: "Code2",
      title: "Веб-разработка",
      description: "Современные веб-приложения с использованием передовых технологий"
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description: "Нативные приложения для iOS и Android с безупречным UX"
    },
    {
      icon: "Palette",
      title: "UI/UX Дизайн",
      description: "Интуитивные интерфейсы, созданные с вниманием к деталям"
    },
    {
      icon: "Cloud",
      title: "Cloud решения",
      description: "Масштабируемая инфраструктура в облаке"
    }
  ];

  const process = [
    { step: "01", title: "Исследование", desc: "Глубокий анализ задачи и целевой аудитории" },
    { step: "02", title: "Планирование", desc: "Проектирование архитектуры и дорожной карты" },
    { step: "03", title: "Дизайн", desc: "Создание прототипов и финального UI/UX" },
    { step: "04", title: "Разработка", desc: "Написание чистого, масштабируемого кода" },
    { step: "05", title: "Тестирование", desc: "Проверка качества на всех уровнях" },
    { step: "06", title: "Поддержка", desc: "Постоянное сопровождение после запуска" }
  ];

  const portfolio = [
    { title: "FinTech Dashboard", tech: "React, TypeScript, Node.js", category: "Web" },
    { title: "E-commerce Platform", tech: "Next.js, PostgreSQL", category: "Commerce" },
    { title: "Healthcare Mobile", tech: "React Native, Firebase", category: "Mobile" },
    { title: "AI Analytics Tool", tech: "Python, TensorFlow", category: "AI/ML" }
  ];

  const team = [
    { name: "Алексей Меркурьев", role: "CEO & Lead Developer" },
    { name: "Мария Иванова", role: "UI/UX Designer" },
    { name: "Дмитрий Петров", role: "Backend Architect" },
    { name: "Екатерина Сидорова", role: "Mobile Developer" }
  ];

  const blog = [
    { title: "Микрофронтенды в 2025", date: "24 декабря 2024", category: "Architecture" },
    { title: "Оптимизация производительности веб-приложений", date: "18 декабря 2024", category: "Performance" },
    { title: "AI в разработке: реальные кейсы применения", date: "10 декабря 2024", category: "AI/ML" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            merkurev.space
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm">
            <a href="#about" className="hover:opacity-60 transition-opacity">О нас</a>
            <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
            <a href="#portfolio" className="hover:opacity-60 transition-opacity">Портфолио</a>
            <a href="#team" className="hover:opacity-60 transition-opacity">Команда</a>
            <a href="#blog" className="hover:opacity-60 transition-opacity">Блог</a>
            <Button size="sm" className="bg-black text-white hover:bg-black/80 rounded-full px-5">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1] tracking-tight">
            Разрабатываем<br />цифровое будущее
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Превращаем амбициозные идеи в инновационные продукты с помощью современных технологий
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8 text-base">
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-gray-300 hover:bg-gray-50">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              О нас
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Команда профессионалов, создающая технологичные решения для бизнеса любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="apple-card p-10 text-center">
              <div className="text-5xl font-semibold mb-3">50+</div>
              <div className="text-gray-600">Проектов</div>
            </div>
            <div className="apple-card p-10 text-center">
              <div className="text-5xl font-semibold mb-3">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="apple-card p-10 text-center">
              <div className="text-5xl font-semibold mb-3">100%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 font-light">Полный спектр разработки от идеи до запуска</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="apple-card p-8 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Процесс разработки
            </h2>
            <p className="text-xl text-gray-600 font-light">Прозрачность на каждом этапе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.map((item, i) => (
              <div key={i} className="apple-card p-8">
                <div className="text-sm font-medium text-gray-400 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 font-light">Проекты, которыми мы гордимся</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {portfolio.map((project, i) => (
              <div key={i} className="apple-card p-10 group cursor-pointer">
                <div className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{project.tech}</p>
                <div className="inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Команда
            </h2>
            <p className="text-xl text-gray-600 font-light">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="apple-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-black mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Блог
            </h2>
            <p className="text-xl text-gray-600 font-light">Делимся опытом и знаниями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blog.map((post, i) => (
              <div key={i} className="apple-card p-8 cursor-pointer group">
                <div className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">{post.category}</div>
                <h3 className="font-semibold mb-3 text-lg leading-snug group-hover:opacity-60 transition-opacity">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Контакты
            </h2>
            <p className="text-xl text-gray-600 font-light">Давайте обсудим ваш проект</p>
          </div>
          <Card className="apple-card p-10 border-0">
            <form className="space-y-6">
              <Input placeholder="Имя" className="h-12 rounded-xl border-gray-200 text-base" />
              <Input type="email" placeholder="Email" className="h-12 rounded-xl border-gray-200 text-base" />
              <Input placeholder="Тема" className="h-12 rounded-xl border-gray-200 text-base" />
              <Textarea placeholder="Расскажите о вашем проекте..." className="rounded-xl border-gray-200 min-h-32 text-base resize-none" />
              <Button className="w-full h-12 bg-black text-white hover:bg-black/90 rounded-full text-base font-medium">
                Отправить
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-16 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-xl font-semibold mb-4">merkurev.space</div>
              <p className="text-sm text-gray-600">IT-агентство полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-black transition-colors cursor-pointer">Веб-разработка</li>
                <li className="hover:text-black transition-colors cursor-pointer">Мобильная разработка</li>
                <li className="hover:text-black transition-colors cursor-pointer">UI/UX Дизайн</li>
                <li className="hover:text-black transition-colors cursor-pointer">Cloud решения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-black transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-black transition-colors cursor-pointer">Портфолио</li>
                <li className="hover:text-black transition-colors cursor-pointer">Команда</li>
                <li className="hover:text-black transition-colors cursor-pointer">Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>info@merkurev.space</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            © 2024 merkurev.space. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
