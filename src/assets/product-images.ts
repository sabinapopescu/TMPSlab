// Product Images
import earringsBaroqueGold from './products/earrings-baroque-gold.jpg';
import necklaceClassicPearls from './products/necklace-classic-pearls.jpg';
import braceletSilverPearls from './products/bracelet-silver-pearls.jpg';
import setWeddingPearls from './products/set-wedding-pearls.jpg';
import earringsAsymmetricModern from './products/earrings-asymmetric-modern.jpg';
import lariatGoldPearls from './products/lariat-gold-pearls.jpg';
import earringsBowSilver from './products/earrings-bow-silver.jpg';
import braceletTripleGold from './products/bracelet-triple-gold.jpg';
import necklaceBaroqueStatement from './products/necklace-baroque-statement.jpg';
import earringsMinimalistDrops from './products/earrings-minimalist-drops.jpg';
import setCocktailRosegold from './products/set-cocktail-rosegold.jpg';
import braceletInfinitySilver from './products/bracelet-infinity-silver.jpg';
import earringsGeometricArt from './products/earrings-geometric-art.jpg';
import chokerVelvetPearl from './products/choker-velvet-pearl.jpg';
import setBridesmaidSilver from './products/set-bridesmaid-silver.jpg';
import earringsBowMini from './products/earrings-bow-mini.jpg';
import braceletCharmPearls from './products/bracelet-charm-pearls.jpg';
import lariatBohemianBaroque from './products/lariat-bohemian-baroque.jpg';
import earringsClusterGold from './products/earrings-cluster-gold.jpg';
import setRoyalBride from './products/set-royal-bride.jpg';

export const productImages = {
  'earrings-baroque-gold': earringsBaroqueGold,
  'necklace-classic-pearls': necklaceClassicPearls,
  'bracelet-silver-pearls': braceletSilverPearls,
  'set-wedding-pearls': setWeddingPearls,
  'earrings-asymmetric-modern': earringsAsymmetricModern,
  'lariat-gold-pearls': lariatGoldPearls,
  'earrings-bow-silver': earringsBowSilver,
  'bracelet-triple-gold': braceletTripleGold,
  'necklace-baroque-statement': necklaceBaroqueStatement,
  'earrings-minimalist-drops': earringsMinimalistDrops,
  'set-cocktail-rosegold': setCocktailRosegold,
  'bracelet-infinity-silver': braceletInfinitySilver,
  'earrings-geometric-art': earringsGeometricArt,
  'choker-velvet-pearl': chokerVelvetPearl,
  'set-bridesmaid-silver': setBridesmaidSilver,
  'earrings-bow-mini': earringsBowMini,
  'bracelet-charm-pearls': braceletCharmPearls,
  'lariat-bohemian-baroque': lariatBohemianBaroque,
  'earrings-cluster-gold': earringsClusterGold,
  'set-royal-bride': setRoyalBride,
};

export function getProductImage(imageKey: string): string {
  return productImages[imageKey as keyof typeof productImages] || earringsBaroqueGold;
}
