import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product/ProductCard';
import productsData from '@/data/products.json';
import type { Product, Category, Metal } from '@/types';
import { getCategoryLabel, getMetalLabel } from '@/lib/format';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SlidersHorizontal } from 'lucide-react';

const products = productsData as Product[];

export default function CategoryShop() {
  const { category } = useParams<{ category: Category }>();
  const [selectedMetal, setSelectedMetal] = useState<Metal[]>([]);
  const [selectedPearlSize, setSelectedPearlSize] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  const pearlSizes = ['3-5mm', '6-8mm', '9-11mm', '12mm+'];

  const categoryProducts = useMemo(() => {
    return products.filter((p) => p.categories.includes(category as Category));
  }, [category]);

  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    if (selectedMetal.length > 0) {
      filtered = filtered.filter((p) => selectedMetal.includes(p.metal));
    }

    if (selectedPearlSize.length > 0) {
      filtered = filtered.filter((p) => {
        const maxSize = Math.max(...p.pearl.sizeMM);
        return selectedPearlSize.some((range) => {
          if (range === '3-5mm') return maxSize >= 3 && maxSize <= 5;
          if (range === '6-8mm') return maxSize >= 6 && maxSize <= 8;
          if (range === '9-11mm') return maxSize >= 9 && maxSize <= 11;
          if (range === '12mm+') return maxSize >= 12;
          return false;
        });
      });
    }

    if (inStockOnly) {
      filtered = filtered.filter((p) => p.stock > 0);
    }

    if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price.amount - b.price.amount);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price.amount - a.price.amount);
    }

    return filtered;
  }, [categoryProducts, selectedMetal, selectedPearlSize, inStockOnly, sortBy]);

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-cormorant font-semibold text-lg mb-3">Finisaj Metalic</h3>
        <div className="space-y-2">
          {(['auriu', 'argintiu', 'rose'] as Metal[]).map((metal) => (
            <div key={metal} className="flex items-center space-x-2">
              <Checkbox
                id={`metal-${metal}`}
                checked={selectedMetal.includes(metal)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedMetal([...selectedMetal, metal]);
                  } else {
                    setSelectedMetal(selectedMetal.filter((m) => m !== metal));
                  }
                }}
              />
              <Label htmlFor={`metal-${metal}`} className="cursor-pointer">
                {getMetalLabel(metal)}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-cormorant font-semibold text-lg mb-3">Dimensiune Perle</h3>
        <div className="space-y-2">
          {pearlSizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={selectedPearlSize.includes(size)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedPearlSize([...selectedPearlSize, size]);
                  } else {
                    setSelectedPearlSize(selectedPearlSize.filter((s) => s !== size));
                  }
                }}
              />
              <Label htmlFor={`size-${size}`} className="cursor-pointer">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-cormorant font-semibold text-lg mb-3">Disponibilitate</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="in-stock"
            checked={inStockOnly}
            onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
          />
          <Label htmlFor="in-stock" className="cursor-pointer">
            Doar produse în stoc
          </Label>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedMetal([]);
          setSelectedPearlSize([]);
          setInStockOnly(false);
        }}
      >
        Resetează Filtrele
      </Button>
    </div>
  );

  if (!category) return null;

  return (
    <div className="min-h-screen bg-porcelain py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-charcoal mb-4">
            {getCategoryLabel(category)}
          </h1>
          <p className="text-graphite text-lg">
            Colecția noastră de {getCategoryLabel(category).toLowerCase()} din perle naturale
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <h2 className="font-cormorant font-bold text-2xl mb-6">Filtrează</h2>
              <FilterContent />
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtre
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="font-cormorant text-2xl">Filtrează</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2">
                <span className="text-sm text-graphite hidden sm:inline">Sortează:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-4 py-2 border border-softgrey rounded-lg bg-white text-sm focus:outline-none focus:border-brand-700"
                >
                  <option value="newest">Noutăți</option>
                  <option value="price-asc">Preț: Crescător</option>
                  <option value="price-desc">Preț: Descrescător</option>
                </select>
              </div>
            </div>

            <p className="text-sm text-graphite mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produs' : 'produse'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-graphite text-lg">Nu am găsit produse în această categorie.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedMetal([]);
                    setSelectedPearlSize([]);
                    setInStockOnly(false);
                  }}
                >
                  Resetează Filtrele
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
