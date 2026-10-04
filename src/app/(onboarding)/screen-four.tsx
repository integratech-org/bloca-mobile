import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

// Any valid icon name accepted by <MaterialDesignIcons name="..." />
type IconName = React.ComponentProps<typeof MaterialDesignIcons>['name'];

// A checklist step: left icon, title and description text, and a unique id
type Step = { id: string; icon: IconName; title: string; description: string };

const steps: Step[] = [
  {
    id: 'guidance',
    icon: 'file-document-outline',
    title: 'Guidance',
    description: 'Read manual instructions',
  },
  {
    id: 'discover',
    icon: 'plus-box-outline',
    title: 'Discover',
    description: 'Located the emergency buttons',
  },
  {
    id: 'info',
    icon: 'thermometer',
    title: 'Information',
    description: 'Know the temperature cutoff',
  },
];

function ChecklistRow({
  step,
  done,
  onPress,
}: {
  step: Step;
  done: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} className='flex-row items-center gap-5'>
      {/* left icon circle */}
      <View className='h-16 w-16 items-center justify-center rounded-full bg-[#B85C38]'>
        <MaterialDesignIcons name={step.icon} size={28} color='white' />
      </View>

      {/* text */}
      <View className='flex-1'>
        <Text className='text-foreground text-xl font-bold'>{step.title}</Text>
        <Text
          style={{ fontFamily: 'Inter_400Regular', fontSize: 12 }}
          className='text-foreground'
        >
          {step.description}
        </Text>
      </View>

      {/* right circle: chevron when pending, check when done */}
      <View
        className={`h-16 w-16 items-center justify-center rounded-full border ${
          done ? 'border-green-500 bg-green-200' : 'border-neutral-400'
        }`}
      >
        <MaterialDesignIcons
          name={done ? 'check' : 'chevron-right'}
          size={28}
          color='black'
        />
      </View>
    </Pressable>
  );
}

export default function WelcomeScreenFour() {
  const [doneIds, setDoneIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setDoneIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

  return (
    <>
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 36 }}>
          Sign-off Checklist
        </Text>
      </View>

      {/* Description Text */}
      <View className='px-4'>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14 }}>
          Check these if your ready to go
        </Text>
      </View>

      {/* Checklist Items */}
      <View className='items-center justify-center gap-6 p-4'>
        {/* Mapped Each checklist item */}
        {steps.map((s) => (
          <ChecklistRow
            key={s.id}
            step={s}
            done={doneIds.includes(s.id)}
            onPress={() => toggle(s.id)}
          />
        ))}
      </View>
    </>
  );
}
