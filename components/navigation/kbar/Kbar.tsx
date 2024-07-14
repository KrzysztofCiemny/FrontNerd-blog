import { KBarAnimator, KBarPortal, KBarPositioner } from 'kbar';
import { RenderResults } from './renderResults/RenderResults';
import { SearchInput } from './searchInput/SearchInput';
import FocusTrap from 'focus-trap-react';
import { HelperActions } from './actions/HelperActions';
import { NavActions } from './actions/NavActions';
import { PostsActions } from './actions/PostsActions';
import { SocialsActions } from './actions/SocialsActions';
import { KbarHeader } from './kbarHeader/KbarHeader';

const styles = {
  wrapper: 'z-[100] relative rounded-lg',
  positioner: 'bg-lightBlue sm:bg-lightBlue2 z-30 !p-0 sm:!py-[14vh] sm:!px-4',
  animator:
    'w-full sm:w-[42rem] bg-lightBlue sm:rounded-xl sm:shadow-lg overflow-hidden no-scrollbar',
};
const { wrapper, positioner, animator } = styles;

function Kbar() {
  NavActions();
  HelperActions();
  SocialsActions();
  PostsActions();

  return (
    <KBarPortal>
      <FocusTrap>
        <div id="kbar-navigation" className={wrapper}>
          <KBarPositioner className={positioner}>
            <KBarAnimator className={animator}>
              <KbarHeader />
              <SearchInput />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </div>
      </FocusTrap>
    </KBarPortal>
  );
}

export default Kbar;
