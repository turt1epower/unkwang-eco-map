export interface Plant {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    plant: Plant | null;
}