import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedClass, setSelectedClass] = useState('9А');

  const schedule = {
    '9А': [
      { time: '8:00-8:45', subject: 'Математика', teacher: 'Иванова М.П.', room: '201' },
      { time: '8:55-9:40', subject: 'Русский язык', teacher: 'Петрова А.С.', room: '305' },
      { time: '9:50-10:35', subject: 'История', teacher: 'Сидоров И.В.', room: '102' },
      { time: '10:55-11:40', subject: 'Физика', teacher: 'Козлов П.А.', room: '408' },
      { time: '11:50-12:35', subject: 'Английский', teacher: 'Смирнова Е.Н.', room: '210' },
      { time: '12:45-13:30', subject: 'Химия', teacher: 'Новикова О.В.', room: '507' },
    ],
    '10Б': [
      { time: '8:00-8:45', subject: 'Физика', teacher: 'Козлов П.А.', room: '408' },
      { time: '8:55-9:40', subject: 'Литература', teacher: 'Петрова А.С.', room: '305' },
      { time: '9:50-10:35', subject: 'Алгебра', teacher: 'Иванова М.П.', room: '201' },
      { time: '10:55-11:40', subject: 'География', teacher: 'Волков С.К.', room: '115' },
      { time: '11:50-12:35', subject: 'Биология', teacher: 'Павлова Л.И.', room: '309' },
    ],
    '11В': [
      { time: '8:00-8:45', subject: 'Математика', teacher: 'Иванова М.П.', room: '201' },
      { time: '8:55-9:40', subject: 'Обществознание', teacher: 'Сидоров И.В.', room: '102' },
      { time: '9:50-10:35', subject: 'Английский', teacher: 'Смирнова Е.Н.', room: '210' },
      { time: '10:55-11:40', subject: 'Информатика', teacher: 'Куликов Д.М.', room: '312' },
      { time: '11:50-12:35', subject: 'Физкультура', teacher: 'Орлов В.П.', room: 'Спортзал' },
    ],
  };

  const journal = [
    { id: 1, student: 'Алексеев Иван', math: 5, physics: 4, russian: 5, english: 5, attendance: 98 },
    { id: 2, student: 'Борисова Мария', math: 5, physics: 5, russian: 5, english: 4, attendance: 100 },
    { id: 3, student: 'Васильев Петр', math: 4, physics: 4, russian: 4, english: 4, attendance: 95 },
    { id: 4, student: 'Григорьева Анна', math: 5, physics: 5, russian: 5, english: 5, attendance: 100 },
    { id: 5, student: 'Дмитриев Сергей', math: 3, physics: 4, russian: 4, english: 3, attendance: 87 },
    { id: 6, student: 'Егорова Елена', math: 5, physics: 4, russian: 5, english: 5, attendance: 96 },
    { id: 7, student: 'Жуков Андрей', math: 4, physics: 5, russian: 4, english: 4, attendance: 92 },
    { id: 8, student: 'Зайцева Ольга', math: 5, physics: 5, russian: 5, english: 5, attendance: 100 },
  ];

  const achievements = [
    { title: 'Олимпиада по математике', place: '1 место', level: 'Региональный', year: '2024' },
    { title: 'Конкурс по физике', place: '2 место', level: 'Всероссийский', year: '2024' },
    { title: 'Научная конференция', place: '1 место', level: 'Городской', year: '2023' },
    { title: 'Спортивные соревнования', place: '3 место', level: 'Областной', year: '2024' },
  ];

  const getGradeColor = (grade: number) => {
    if (grade === 5) return 'bg-green-500';
    if (grade === 4) return 'bg-blue-500';
    if (grade === 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Школа №1
              </span>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="font-medium"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'schedule' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('schedule')}
                className="font-medium"
              >
                <Icon name="Calendar" size={18} className="mr-2" />
                Расписание
              </Button>
              <Button
                variant={activeSection === 'journal' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('journal')}
                className="font-medium"
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Журнал
              </Button>
              <Button
                variant={activeSection === 'about' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('about')}
                className="font-medium"
              >
                <Icon name="Info" size={18} className="mr-2" />
                О школе
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl font-heading font-bold mb-4">
                  Добро пожаловать в Школу №1! 🎓
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Современное образование с акцентом на развитие талантов и достижение высоких результатов
                </p>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 font-semibold"
                    onClick={() => setActiveSection('journal')}
                  >
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Электронный журнал
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10"
                    onClick={() => setActiveSection('schedule')}
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Расписание
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">800+ учеников</CardTitle>
                  <CardDescription>Наша дружная школьная семья</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="Award" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="font-heading">50+ наград</CardTitle>
                  <CardDescription>Победы на олимпиадах и конкурсах</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name="BookMarked" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="font-heading">60+ педагогов</CardTitle>
                  <CardDescription>Опытные учителя-профессионалы</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Icon name="Trophy" size={28} className="text-primary" />
                  Наши достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <Badge variant="secondary" className="bg-primary text-white">
                          {achievement.year}
                        </Badge>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="border-secondary text-secondary">
                          {achievement.place}
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent">
                          {achievement.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Расписание уроков
              </h2>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9А">9А класс</SelectItem>
                  <SelectItem value="10Б">10Б класс</SelectItem>
                  <SelectItem value="11В">11В класс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-primary" />
                  Класс {selectedClass}
                </CardTitle>
                <CardDescription>Понедельник, 22 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule[selectedClass as keyof typeof schedule].map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary hover:shadow-md transition-all"
                    >
                      <div className="text-center min-w-24">
                        <div className="text-sm font-semibold text-primary">{lesson.time}</div>
                        <div className="text-xs text-muted-foreground">Урок {index + 1}</div>
                      </div>
                      <div className="h-12 w-px bg-border"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{lesson.subject}</h4>
                        <p className="text-sm text-muted-foreground">{lesson.teacher}</p>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent font-medium">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {lesson.room}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'journal' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Электронный журнал
              </h2>
              <Badge className="bg-primary text-white text-base px-4 py-2">
                9А класс
              </Badge>
            </div>

            <Tabs defaultValue="grades" className="space-y-4">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="grades" className="font-medium">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Оценки
                </TabsTrigger>
                <TabsTrigger value="attendance" className="font-medium">
                  <Icon name="UserCheck" size={18} className="mr-2" />
                  Посещаемость
                </TabsTrigger>
              </TabsList>

              <TabsContent value="grades">
                <Card className="border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading">Успеваемость учеников</CardTitle>
                    <CardDescription>Средние оценки по основным предметам</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-xl border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/5">
                            <TableHead className="font-semibold">Ученик</TableHead>
                            <TableHead className="text-center font-semibold">Математика</TableHead>
                            <TableHead className="text-center font-semibold">Физика</TableHead>
                            <TableHead className="text-center font-semibold">Русский</TableHead>
                            <TableHead className="text-center font-semibold">Английский</TableHead>
                            <TableHead className="text-center font-semibold">Средний балл</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {journal.map((student) => {
                            const avg = ((student.math + student.physics + student.russian + student.english) / 4).toFixed(1);
                            return (
                              <TableRow key={student.id} className="hover:bg-primary/5">
                                <TableCell className="font-medium">{student.student}</TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getGradeColor(student.math)} text-white font-semibold`}>
                                    {student.math}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getGradeColor(student.physics)} text-white font-semibold`}>
                                    {student.physics}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getGradeColor(student.russian)} text-white font-semibold`}>
                                    {student.russian}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge className={`${getGradeColor(student.english)} text-white font-semibold`}>
                                    {student.english}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-center">
                                  <Badge variant="outline" className="border-primary text-primary font-bold text-base">
                                    {avg}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attendance">
                <Card className="border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading">Посещаемость учеников</CardTitle>
                    <CardDescription>Процент присутствия на занятиях</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {journal.map((student) => (
                        <div key={student.id} className="p-4 rounded-xl border-2 hover:shadow-md transition-all">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-semibold text-lg">{student.student}</span>
                            <Badge
                              className={`text-white font-bold text-base ${
                                student.attendance >= 95
                                  ? 'bg-green-500'
                                  : student.attendance >= 90
                                  ? 'bg-blue-500'
                                  : 'bg-yellow-500'
                              }`}
                            >
                              {student.attendance}%
                            </Badge>
                          </div>
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                student.attendance >= 95
                                  ? 'bg-green-500'
                                  : student.attendance >= 90
                                  ? 'bg-blue-500'
                                  : 'bg-yellow-500'
                              }`}
                              style={{ width: `${student.attendance}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О нашей школе
            </h2>

            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Icon name="School" size={28} className="text-primary" />
                  Школа №1 - территория возможностей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Мы — современное образовательное учреждение, где каждый ученик может раскрыть свой потенциал. 
                    Наша школа оснащена передовым оборудованием, а наши педагоги используют инновационные методики обучения.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold flex items-center gap-2">
                      <Icon name="Target" size={24} className="text-primary" />
                      Наша миссия
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Создавать комфортную образовательную среду, в которой каждый ученик получает качественные знания 
                      и развивает личностные качества для успешного будущего.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold flex items-center gap-2">
                      <Icon name="Lightbulb" size={24} className="text-secondary" />
                      Наши ценности
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span className="text-muted-foreground">Индивидуальный подход к каждому</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span className="text-muted-foreground">Инновационные методы обучения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span className="text-muted-foreground">Развитие творческих способностей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-1" />
                        <span className="text-muted-foreground">Подготовка к успешному будущему</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                    <Icon name="Microscope" size={32} className="text-primary mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Современные лаборатории</h4>
                    <p className="text-sm text-muted-foreground">Физика, химия, биология с новым оборудованием</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
                    <Icon name="Laptop" size={32} className="text-secondary mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Компьютерные классы</h4>
                    <p className="text-sm text-muted-foreground">Изучение IT-технологий и программирования</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20">
                    <Icon name="Dumbbell" size={32} className="text-accent mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Спортивные залы</h4>
                    <p className="text-sm text-muted-foreground">Развитие физической активности и здоровья</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Icon name="Phone" size={28} className="text-primary" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Школьная, д. 1</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@school1.ru</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Школа №1
              </span>
            </div>
            <p className="text-muted-foreground">© 2024 Школа №1. Все права защищены.</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;