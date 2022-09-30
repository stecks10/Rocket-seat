import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$gray300',
});

export default function Home() {
  return (
    <Button>
      <span>teste</span>
      clique
    </Button>
  );
}
