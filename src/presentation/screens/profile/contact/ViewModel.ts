import {getContactInformationUseCase} from '../../../../config/AthleteContainer/container';
import {useEffect, useState} from 'react';

export type Category = {
  title: string;
  content: string;
  icon: string;
};

const data: Category[] = [
  {
    title: 'Whatsapp',
    content: '',
    icon: 'logo-whatsapp',
  },
  {
    title: 'Web',
    content: '',
    icon: 'globe-outline',
  },
  {
    title: 'Email',
    content: '',
    icon: 'mail-outline',
  },
  {
    title: 'Telefono',
    content: '',
    icon: 'call-outline',
  },
];

const ContactViewModel = () => {
  const [contact, setContact] = useState<Category[]>(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactInformation();
  }, []);

  const getContactInformation = async () => {
    try {
      setLoading(true);
      const response = await getContactInformationUseCase.execute();

      const newContact: Category[] = [
        {
          title: 'Whatsapp',
          content: response.whatsApp,
          icon: 'logo-whatsapp',
        },
        {
          title: 'Web',
          content: response.web,
          icon: 'globe-outline',
        },
        {
          title: 'Email',
          content: response.email,
          icon: 'mail-outline',
        },
        {
          title: 'Telefono',
          content: response.phoneNumber,
          icon: 'call-outline',
        },
      ];

      setContact(newContact);
    } catch (error) {
      console.log('error 2', error);
    } finally {
      setLoading(false);
    }
  };

  return {contact, loading};
};

export default ContactViewModel;
