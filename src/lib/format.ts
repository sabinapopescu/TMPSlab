export function formatPrice(amount: number, currency: 'MDL' | 'EUR' = 'MDL'): string {
  return new Intl.NumberFormat('ro-RO', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'cercei': 'Cercei',
    'coliere': 'Coliere',
    'bratari': 'Brățări',
    'seturi': 'Seturi',
    'setuar-lariat': 'Setuar & Lariat',
    'asimetric': 'Asimetric',
    'bow': 'Bow',
  };
  return labels[category] || category;
}

export function getMetalLabel(metal: string): string {
  const labels: Record<string, string> = {
    'auriu': 'Aur',
    'argintiu': 'Argint',
    'rose': 'Aur Roz',
  };
  return labels[metal] || metal;
}

export function getPearlTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'freshwater': 'Perle de Apă Dulce',
    'baroque': 'Perle Baroque',
    'seed': 'Perle Seed',
    'cultured': 'Perle Cultivate',
  };
  return labels[type] || type;
}
