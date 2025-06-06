import { Avatar, Heading, Text } from '@ignite-ui/react'
import { Container, UserHeader } from './styles'
import { GetStaticProps, GetStaticPaths } from 'next'
import { prisma } from '../../../lib/prisma'
import { ScheduleForm } from './ScheduleeForm'

export default function Schedule({
  user,
}: {
  user: { name: string; avatarUrl: string; bio: string }
}) {
  return (
    <Container>
      <UserHeader>
        <Avatar src={user.avatarUrl} />
        <Heading size="2xl">{user.name}</Heading>
        <Text size="sm">{user.bio}</Text>
      </UserHeader>

      <ScheduleForm />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user: {
        name: user.name,
        avatarUrl: user.avatar_url,
        bio: user.bio,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
