import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
}

interface ProductListProps {
  products: Product[];
  totalProducts: number; // Thêm trường này để biểu diễn tổng số lượng sản phẩm
}

const ResultsLoaded: React.FC<ProductListProps> = ({ products, totalProducts }) => {
  return (
    <div>
      <p>{products.length} Results Loaded of {totalProducts}</p>
      {/* Hiển thị thông tin chi tiết của từng sản phẩm nếu cần */}
    </div>
  );
};

export default ResultsLoaded;
