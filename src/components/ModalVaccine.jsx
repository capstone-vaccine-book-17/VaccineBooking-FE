import React from 'react';
import Close from '../assets/CloseIcon.svg';

const ModalVaccine = ({
  isVisible,
  onClose,
  deleteDataVaccine,
  dataVaccine,
}) => {
  if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='flex flex-col w-[620px] rounded-md bg-white gap-12 p-[24px] shadow-lg'>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between items-center p-2'>
            <h1 className='text-[24px] font-medium'>Hapus Data?</h1>
            <button onClick={() => onClose()}>
              <img src={Close} alt='' />
            </button>
          </div>
          <div className='w-full h-[1px] bg-[#646464]'></div>
        </div>
        <div className='w-full flex flex-col'>
          <div className='p-2'>
            <h1 className='text-[20px] font-medium'>
              Yakin data akan dihapus?
            </h1>
          </div>
          <div className='w-full h-[1px] bg-[#646464]'></div>
        </div>
        <div className='w-full flex justify-end gap-[30px]'>
          <button
            onClick={() => {
              deleteDataVaccine(dataVaccine.vaccine_id);
              onClose();
            }}
            className='text-[24px] text-[#0057FF] bg-white border-2 border-[#0057FF] px-4 py-2 rounded-[8px] hover:bg-[#0057FF] hover:text-white'
          >
            Ya
          </button>
          <button
            onClick={() => onClose()}
            className='text-[24px] text-white bg-[#0057FF] border-2 border-[#0057FF] px-4 py-2 rounded-[8px]'
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVaccine;
