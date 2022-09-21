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

export function UserCard() {
  return (
    <Layout>
      <UserCardContainer>
        <img src="https://github.com/stecks10.png" alt="vitor" />
        <UserCardContent>
          <UserCardNameContainer>
            <h2>Vitor</h2>

            <a
              href="http://github.com/stecks10"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
              <FaExternalLinkAlt color="#3294F8" size="12px" />
            </a>
          </UserCardNameContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit
            impedit tempore architecto vero reprehenderit. Ducimus expedita a
            optio non perferendis volup
          </p>
          <UserCardInfo>
            <span>
              <FaGithub size={18} color="#3A536B" />
              Vitornunes
            </span>
            <span>
              <FaBuilding size={18} color="#3A536B" />
              Rocketseat
            </span>
            <span>
              <FaUserFriends size={18} color="#3A536B" />
              32 seguidores
            </span>
          </UserCardInfo>
        </UserCardContent>
      </UserCardContainer>
    </Layout>
  );
}
