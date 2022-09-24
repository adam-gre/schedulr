const { prisma } = require("~/db.server");

export function getPost({ id }) {
  return prisma.post.findFirst({
    select: { id: true, body: true, title: true },
    where: { id },
  });
}

export function getPosts({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createPost({ body, title, userId }) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deletePost({ id, userId }) {
  return prisma.note.deleteMany({
    where: { id, userId },
  });
}
