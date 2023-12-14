// src/collections/lomba.ts

import { CollectionConfig } from 'payload/types';

const Lomba: CollectionConfig = {
  slug: 'lomba',
  fields: [
    {
      name: 'nama',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'asalSekolah',
      label: 'Asal Sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Aktif', value: 'aktif' },
        { label: 'Tidak Aktif', value: 'tidak_aktif' },
      ],
      defaultValue: 'aktif',
    },
    {
      name: 'tanggalPendaftaran',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
    },
  ],
  access: {
    read: () => true,    // Semua orang dapat membaca data Lomba
    create: () => true,  // Semua orang dapat membuat data Lomba
    update: () => true,  // Semua orang dapat mengupdate data Lomba
    delete: () => true,  // Semua orang dapat menghapus data Lomba
  },
};

export default Lomba;
