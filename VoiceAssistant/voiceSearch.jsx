import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import VoiceLogic from './VoiceLogic';

const VoiceSearch = (props) => {
  const alanKey = 'b7b35d6188e64ea86c2ec8ec6d5d6ea42e956eca572e1d8b807a3e2338fdd0dc/stage';

  const [query, setQuery] = useState('');

  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        if (commandData.command === 'VoiceNews') {
          const query = commandData.data;
          setQuery(query);
        }
      }
    });

    return () => {
      alanBtnInstance.remove();
    };
  }, []);

  return (
    <>
      <VoiceLogic 
      query={query}
      mode={props.mode}
      pageSize={props.pageSize}
      />
    </>
  );
}

export default VoiceSearch;


