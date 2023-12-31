'use client'

import { useState } from 'react';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	secondaryAction,
	secondaryLabel,
	disabled,
}) => {

	const [showModal, setShowModal] = useState(false)

	return <></>;
};

export default Modal;
