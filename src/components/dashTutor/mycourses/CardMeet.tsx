import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len: number) {
  let result = '';
  if (result) return result;
  const chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
  const maxPos = chars.length;
  let i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  const urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const CardMeet: React.FC = () => {
  const meetingContainer = useRef<HTMLDivElement>(null);
  const roomID = getUrlParams().get('roomID') || randomID(5);

  useEffect(() => {
    const myMeeting = async () => {
      // generate Kit Token
      const appID = 1501790799;
      const serverSecret = '76f799adc59e43eb065d6bbfedf45af0';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: meetingContainer.current,
        sharedLinks: [
          {
            name: 'Copy link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };

    if (meetingContainer.current) {
      myMeeting();
    }
  }, [roomID]);
  return   <div ref={meetingContainer} className='myCallContainer  p-3 -mt-0 w-[1000px] border-2 border-slate-300 h-[620px] rounded-[50px]'></div>
  ;
};

export default CardMeet;