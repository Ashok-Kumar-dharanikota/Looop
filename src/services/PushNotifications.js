import notifee, {
  AndroidImportance,
  RepeatFrequency,
  TimeUnit,
  TriggerType,
} from '@notifee/react-native';
import {icons} from '../assets/icons/icons';
import showToast from './ShowToast';

const PushNotifications = async Times => {
  const {Morning} = Times[0].current;
  const {Afternoon} = Times[1].current;
  const {Evening} = Times[2].current;

  const n1 = await onCreateTriggerNotification(Morning);
  const n2 = await onCreateTriggerNotification(Afternoon);
  const n3 = await onCreateTriggerNotification(Evening);

  if (n1 || n2 || n3) {
    showToast(
      'success',
      'Notifications enabled.',
      'Looop will notify you to update your expenses.',
    );
    return true;
  } else {
    showToast(
      'info',
      'Notifications not enabled.',
      'Please enable atleast one time',
    );
    return false;
  }
};

async function onCreateTriggerNotification(time) {
  if (!time.status) return false;

  try {
    const date = new Date(Date.now());
    date.setHours(time.hour);
    date.setMinutes(time.mins);

    const trigger = {
      // type: TriggerType.TIMESTAMP,
      // timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.DAILY,
      type: TriggerType.INTERVAL,
      interval: 15,
      timeUnit: TimeUnit.MINUTES,
      alarmManager: {
        allowWhileIdle: true,
      },
    };

    const channelId = await notifee.createChannel({
      id: 'daily_reminder',
      name: 'Daily Reminder',
      importance: AndroidImportance.HIGH,
    });

    await notifee.createTriggerNotification(
      {
        title: '<p style="color: #ea580c;"><b>reminder!!!</span></p></b></p>',
        body: 'Be productive. update your expenses!',
        android: {
          channelId,
          color: '#4caf50',
          largeIcon: icons.logo,
          actions: [
            {
              title: '<b>Record</b>',
              pressAction: {id: 'record'},
            },
            {
              title: '<b>Later</b>',
              pressAction: {id: 'later'},
            },
          ],
        },
      },
      trigger,
    );
    return true;
  } catch (error) {
    console.log(error);
  }
}

export default PushNotifications;
