import { KBarResults, useMatches } from 'kbar';
import { NavActions } from '../actions/NavActions';
import { SocialsActions } from '../actions/SocialsActions';
import { PostsActions } from '../actions/PostsActions';

function RenderResults() {
  const { results } = useMatches();
  NavActions();
  SocialsActions();
  PostsActions();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? '#eee' : 'transparent',
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

export default RenderResults;
