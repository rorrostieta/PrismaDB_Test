const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa10 = await prisma.explorer.upsert({
      where: { name: 'Woopa 10' },
      update: {},
      create: {
        name: 'Woopa 10',
				username: 'ajolonauta10',
				mission: 'Node'
      },
    });

    const woopa100 = await prisma.explorer.upsert({
      where: { name: 'Woopa 100' },
      update: {},
      create: {
        name: 'Woopa 100',
				username: 'ajolonauta100',
				mission: 'Java'
      },
    });

    const student1 = await prisma.student.upsert({
      where: { name: 'Student1' },
      update: {},
      create: {
        name: 'Student1',
				lang: 'Javascript',
				missionCommander: 'Carlo',
        enrollments: 4,
        hasCertification: true
      },
    });

    const student2 = await prisma.student.upsert({
      where: { name: 'Student2' },
      update: {},
      create: {
        name: 'Student2',
				lang: 'Javascript',
				missionCommander: 'Fernanda',
        enrollments: 4,
        hasCertification: false
      },
    });

    const student3 = await prisma.student.upsert({
      where: { name: 'Student3' },
      update: {},
      create: {
        name: 'Student3',
				lang: 'Javascript',
				missionCommander: 'Fernanda',
        enrollments: 6,
        hasCertification: true
      },
    });

    const student4 = await prisma.student.upsert({
      where: { name: 'Student4' },
      update: {},
      create: {
        name: 'Student4',
				lang: 'Javascript',
				missionCommander: 'Carlo',
        enrollments: 5,
        hasCertification: true
      },
    });

    const commander1 = await prisma.commander.upsert({
      where: { name: 'Commander1' },
      update: {},
      create: {
        name: 'Commander1',
				username: 'UserCommander1',
				mainStack: 'Node',
        currentEnrollment: true,
        hasAzureCertification: false
      },
    });

    const commander2 = await prisma.commander.upsert({
      where: { name: 'Commander2' },
      update: {},
      create: {
        name: 'Commander2',
				username: 'UserCommander2',
				mainStack: 'Node',
        currentEnrollment: false,
        hasAzureCertification: true
      },
    });

    const commander3 = await prisma.commander.upsert({
      where: { name: 'Commander3' },
      update: {},
      create: {
        name: 'Commander3',
				username: 'UserCommander3',
				mainStack: 'Java',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    console.log('Create 5 explorers');
    console.log('Create 4 students');
    console.log('Create 3 commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
