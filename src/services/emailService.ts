import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'deevpfa@gmail.com';

// Initialize EmailJS (this should be done once in your app)
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send contact form data via email using EmailJS
 * @param formData - The form data to send
 * @returns Promise with email response
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration missing:', {
        serviceId: !!EMAILJS_SERVICE_ID,
        templateId: !!EMAILJS_TEMPLATE_ID,
        publicKey: !!EMAILJS_PUBLIC_KEY
      });
      
      return {
        success: false,
        message: 'Servicio de email no configurado. Por favor contacta directamente a deevpfa@gmail.com',
        error: 'EmailJS configuration missing'
      };
    }
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'No proporcionado',
      message: formData.message,
      to_email: CONTACT_EMAIL,
      reply_to: formData.email,
      subject: `Nuevo mensaje de contacto de ${formData.name}`,
      // Add timestamp
      date: new Date().toLocaleString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    console.log('Sending email with params:', templateParams);

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS response:', response);

    if (response.status === 200) {
      return {
        success: true,
        message: '¡Mensaje enviado correctamente! Te contactaré pronto.'
      };
    } else {
      throw new Error(`EmailJS returned status ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.';
    
    if (error instanceof Error) {
      // Handle specific EmailJS errors
      if (error.message.includes('Invalid public key')) {
        errorMessage = 'Error de configuración del servicio de email. Contacta al administrador.';
      } else if (error.message.includes('Template not found')) {
        errorMessage = 'Error en la plantilla de email. Contacta al administrador.';
      } else if (error.message.includes('Service not found')) {
        errorMessage = 'Servicio de email no encontrado. Contacta al administrador.';
      }
    }

    return {
      success: false,
      message: errorMessage,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Validate email format
 * @param email - Email to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form data
 * @param formData - Form data to validate
 * @returns object with validation result and errors
 */
export const validateContactForm = (formData: ContactFormData): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('El nombre es requerido');
  }

  if (!formData.email.trim()) {
    errors.push('El email es requerido');
  } else if (!isValidEmail(formData.email)) {
    errors.push('El email no tiene un formato válido');
  }

  if (!formData.message.trim()) {
    errors.push('El mensaje es requerido');
  }

  if (formData.message.length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};