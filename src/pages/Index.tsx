import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const services = [
    {
      icon: "Code2",
      title: "Веб-разработка",
      description: "Создаём современные веб-приложения с использованием React, Vue, Node.js"
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description: "Нативные и кроссплатформенные приложения для iOS и Android"
    },
    {
      icon: "Palette",
      title: "UI/UX Дизайн",
      description: "Проектируем интерфейсы, которые влюбляют пользователей"
    },
    {
      icon: "Cloud",
      title: "Cloud решения",
      description: "Архитектура и внедрение облачных сервисов"
    }
  ];

  const process = [
    { step: "01", title: "Исследование", desc: "Анализируем бизнес-задачу и целевую аудиторию" },
    { step: "02", title: "Планирование", desc: "Разрабатываем архитектуру и дорожную карту" },
    { step: "03", title: "Дизайн", desc: "Создаём прототипы и финальный дизайн" },
    { step: "04", title: "Разработка", desc: "Пишем чистый, масштабируемый код" },
    { step: "05", title: "Тестирование", desc: "Проверяем качество на всех уровнях" },
    { step: "06", title: "Поддержка", desc: "Сопровождаем проект после запуска" }
  ];

  const portfolio = [
    { title: "FinTech Dashboard", tech: "React, TypeScript, Node.js", category: "Web App" },
    { title: "E-commerce Platform", tech: "Next.js, PostgreSQL", category: "E-commerce" },
    { title: "Healthcare Mobile", tech: "React Native, Firebase", category: "Mobile" },
    { title: "AI Analytics Tool", tech: "Python, TensorFlow", category: "AI/ML" }
  ];

  const team = [
    { name: "Алексей Меркурьев", role: "CEO & Lead Developer", icon: "User" },
    { name: "Мария Иванова", role: "UI/UX Designer", icon: "User" },
    { name: "Дмитрий Петров", role: "Backend Architect", icon: "User" },
    { name: "Екатерина Сидорова", role: "Mobile Developer", icon: "User" }
  ];

  const blog = [
    { title: "Микрофронтенды в 2025: плюсы и минусы", date: "24 декабря 2024", category: "Architecture" },
    { title: "Как мы ускорили загрузку сайта на 70%", date: "18 декабря 2024", category: "Performance" },
    { title: "AI в разработке: реальные кейсы", date: "10 декабря 2024", category: "AI/ML" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              merkurev.space
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <Button className="gradient-purple">Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-purple animate-gradient opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-6 glass text-white border-white/20">IT-агентство полного цикла</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Разрабатываем
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              цифровое будущее
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Превращаем амбициозные идеи в инновационные продукты с помощью современных технологий и креативного подхода
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gradient-purple hover:scale-105 transition-transform">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              О нас
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Мы — команда профессионалов, которая создаёт технологичные решения для бизнеса любого масштаба. 
              Используем agile-методологию, следим за трендами и всегда фокусируемся на результате.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 glass text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-muted-foreground">Проектов</div>
              </Card>
              <Card className="p-6 glass text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </Card>
              <Card className="p-6 glass text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-muted-foreground">Удовлетворённых клиентов</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Услуги
          </h2>
          <p className="text-muted-foreground text-center mb-12">Полный спектр разработки от идеи до запуска</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="p-6 glass hover:scale-105 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 relative bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Процесс разработки
          </h2>
          <p className="text-muted-foreground text-center mb-12">Наша методология: прозрачность, гибкость, качество</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((item, i) => (
              <Card key={i} className="p-6 glass relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <Badge className="mb-3 gradient-purple text-white">{item.step}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Портфолио
          </h2>
          <p className="text-muted-foreground text-center mb-12">Проекты, которыми мы гордимся</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {portfolio.map((project, i) => (
              <Card key={i} className="p-6 glass hover:scale-105 transition-all cursor-pointer group">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.tech}</p>
                <Button variant="outline" size="sm" className="group-hover:gradient-purple group-hover:text-white transition-all">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 relative bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Команда
          </h2>
          <p className="text-muted-foreground text-center mb-12">Профессионалы своего дела</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="p-6 glass text-center hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full gradient-purple mx-auto mb-4 flex items-center justify-center">
                  <Icon name={member.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Блог
          </h2>
          <p className="text-muted-foreground text-center mb-12">Делимся знаниями и опытом</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {blog.map((post, i) => (
              <Card key={i} className="p-6 glass hover:scale-105 transition-transform cursor-pointer group">
                <Badge className="mb-3" variant="outline">{post.category}</Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Контакты
            </h2>
            <p className="text-muted-foreground text-center mb-12">Давайте обсудим ваш проект</p>
            <Card className="p-8 glass">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Ваше имя" className="bg-background/50" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-background/50" />
                </div>
                <div>
                  <Input placeholder="Тема" className="bg-background/50" />
                </div>
                <div>
                  <Textarea placeholder="Расскажите о вашем проекте..." className="bg-background/50 min-h-32" />
                </div>
                <Button className="w-full gradient-purple hover:scale-105 transition-transform">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                merkurev.space
              </div>
              <p className="text-sm text-muted-foreground">IT-агентство полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Веб-разработка</li>
                <li>Мобильная разработка</li>
                <li>UI/UX Дизайн</li>
                <li>Cloud решения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Команда</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@merkurev.space</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 merkurev.space. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
