/* eslint-disable @next/next/no-img-element */
import {
  FaGithub,
  FaBuilding,
  FaExternalLinkAlt,
  FaUserFriends,
} from 'react-icons/fa';

import { Layout } from '../../layout';
import {
  UserCardContainer,
  UserCardContent,
  UserCardInfo,
  UserCardNameContainer,
} from './styles';

interface User {
  name: string;
  company: string;
  bio: string;
  followers: number;
  url: string;
  avatar: string;
  login: string;
}

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Layout>
      <UserCardContainer>
        <img src={user.avatar} alt={user.name} />
        <UserCardContent>
          <UserCardNameContainer>
            <h2>{user.name}</h2>

            <a href={user.url} target="_blank" rel="noopener noreferrer">
              GITHUB
              <FaExternalLinkAlt color="#3294F8" size="12px" />
            </a>
          </UserCardNameContainer>
          <p>{user.bio}</p>
          <UserCardInfo>
            <span>
              <FaGithub size={18} color="#3A536B" />
              {user.login}
            </span>
            <span>
              <FaBuilding size={18} color="#3A536B" />
              {user.company}
            </span>
            <span>
              <FaUserFriends size={18} color="#3A536B" />
              {user.followers}
            </span>
          </UserCardInfo>
        </UserCardContent>
      </UserCardContainer>
    </Layout>
  );
}
