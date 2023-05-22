import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCard = () => useTypedSelector((state) => state.card);