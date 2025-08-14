// scripts/seed-elearning.js
'use strict';

module.exports = async ({ strapi }) => {
  try {
    console.log('🌱 Starting e-Learning seed...');

    // 1. Categories
    const categories = [];
    const catData = [
      { title: 'Web Development', slug: 'web-development', description: 'Learn to build web apps' },
      { title: 'Data Science', slug: 'data-science', description: 'Learn data analysis & ML' },
    ];

    for (const data of catData) {
      const category = await strapi.entityService.create('api::category.category', { data });
      console.log('Created category:', category.title);
      categories.push(category);
    }

    // 2. Instructors
    const instructors = [];
    const instructorData = [
      { name: 'Jane Doe', bio: 'Fullstack Developer', socialLinks: { linkedin: '...' } },
      { name: 'John Smith', bio: 'Data Scientist', socialLinks: { twitter: '...' } },
    ];

    for (const data of instructorData) {
      const instructor = await strapi.entityService.create('api::instructor.instructor', { data });
      console.log('Created instructor:', instructor.name);
      instructors.push(instructor);
    }

    // 3. Courses
    const courses = [];
    const courseData = [
      {
        title: 'JavaScript for Beginners',
        slug: 'javascript-for-beginners',
        description: 'Intro to JS',
        category: categories[0].id,
        instructors: instructors.map(i => i.id),
        level: 'Beginner',
        duration: 30,
        language: 'English',
        price: 49.99,
      },
    ];

    for (const data of courseData) {
      const course = await strapi.entityService.create('api::course.course', { data });
      console.log('Created course:', course.title);
      courses.push(course);
    }

    // 4. Lessons
    const lessons = [];
    const lessonData = [
      { title: 'Intro to JS', slug: 'intro-to-js', content: 'Basics of JS', course: courses[0].id, duration: 10, order: 1 },
    ];

    for (const data of lessonData) {
      const lesson = await strapi.entityService.create('api::lesson.lesson', { data });
      console.log('Created lesson:', lesson.title);
      lessons.push(lesson);
    }

    // 5. Quizzes
    const quizData = [
      { title: 'JS Basics Quiz', lesson: lessons[0].id, questions: JSON.stringify([{ question: 'What is JS?', options: ['JavaScript', 'Java'], answer: 0 }]), passingScore: 70 },
    ];

    for (const data of quizData) {
      const quiz = await strapi.entityService.create('api::quiz.quiz', { data });
      console.log('Created quiz:', quiz.title);
    }

    console.log('✅ Seeding completed!');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  }
};
