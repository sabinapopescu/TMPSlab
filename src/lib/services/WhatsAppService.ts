import { CartItem } from '@/types';

export interface MessagingService {
  sendOrder(items: CartItem[], subtotal: number, shipping: number, total: number): string;
}

export class WhatsAppService implements MessagingService {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  sendOrder(items: CartItem[], subtotal: number, shipping: number, total: number): string {
    let message = `Bună! Aș dori să finalizez următoarea comandă:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.title}\n`;
      message += `   Cantitate: ${item.quantity}\n`;
      message += `   Preț: ${item.product.price.amount * item.quantity} ${item.product.price.currency}\n\n`;
    });

    message += `Subtotal: ${subtotal} MDL\n`;
    message += `Livrare: ${shipping === 0 ? 'Gratuită' : shipping + ' MDL'}\n`;
    message += `Total: ${total} MDL\n\n`;
    message += `Vă rog să mă contactați pentru detalii de livrare și plată. Mulțumesc!`;

    return encodeURIComponent(message);
  }
}
