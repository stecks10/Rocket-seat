import { CloseButton } from '../../CloseButton';

export function FeedBackSuccessStep() {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <span className="text-xl leading-6">Deixe seu feedback</span>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
