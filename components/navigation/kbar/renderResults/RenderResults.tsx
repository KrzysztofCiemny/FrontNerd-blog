import { KBarResults, useMatches } from 'kbar';
import Image from 'next/image';

const styles = {
  itemSection: 'py-2 px-5 text-sm font-semibold text-black tracking-wide',
  container: 'p-2 overflow-hidden',
  wrapper:
    'text-base px-4 py-0 sm:py-3 rounded-xl cursor-pointer text-gray h-9 flex items-center justify-between',
  itemName: 'flex items-center justify-start',
  itemShortcut: 'text-sm text-gray hidden sm:block',
};
const { itemSection, container, wrapper, itemName, itemShortcut } = styles;

export const RenderResults = () => {
  const { results } = useMatches();

  const getKBarMaxHeight = () => {
    if (typeof window !== 'undefined') {
      const minWidth = 576;

      return document.documentElement.clientWidth < minWidth ? window.innerHeight : undefined;
    }

    return undefined;
  };

  return (
    <KBarResults
      maxHeight={getKBarMaxHeight()}
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className={itemSection}>{item}</div>
        ) : (
          <div className={container}>
            <div className={`${active ? 'bg-lightBlue2' : 'bg-transparent'} ${wrapper}`}>
              <div className={itemName}>
                {typeof item.icon === 'string' && (
                  <Image src={item.icon} alt={item.name} width={16} height={16} className="mr-2" />
                )}
                {item.name}
              </div>
              {item.shortcut && <kbd className={itemShortcut}>{item.shortcut}</kbd>}
            </div>
          </div>
        )
      }
    />
  );
};
