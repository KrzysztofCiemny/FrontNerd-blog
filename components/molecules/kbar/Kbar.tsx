import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  useMatches,
  useRegisterActions,
} from 'kbar';
import RenderResults from './RenderResults/RenderResults';

function Kbar() {
  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

export default Kbar;
