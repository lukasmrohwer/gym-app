import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="index" href="/home">
          Home
        </TabTrigger>
        <TabTrigger name="explore" href="/workout">
          Workout
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
