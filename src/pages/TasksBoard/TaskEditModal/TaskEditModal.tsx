import React, { useContext } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Avatar, ModalFooter } from '@nextui-org/react';
import CommentBox from './CommentBox';
import DueDate from './DueDate';
import { AuthContext } from '../../../Providers/AuthProvider';

type parameter = {
     onClose: any;
     isOpen: any;
     task: any
    
    }
const TaskEditModal = ({ isOpen, onClose, task }: parameter) => {
    const {user} = useContext(AuthContext)
  return  (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{task.title}</ModalHeader>
        <ModalBody>
          <p>{task.description}</p>
          <DueDate />
          <div className="flex items-center gap-5 bg-gray-200 px-5 pt-2 pb-10 rounded-md">
            <Avatar src={user.photoURL} />
            <CommentBox />
          </div>
          <ModalFooter>
            <button  onClose={onClose}> ok </button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TaskEditModal;
