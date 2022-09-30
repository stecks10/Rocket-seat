import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$rocketseat',
});

export default function Home() {
  return (
    <Button>
      <span>teste</span>
      clique
    </Button>
  );
}
