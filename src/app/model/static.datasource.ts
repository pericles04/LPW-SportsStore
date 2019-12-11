import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Bola de futebol","Bolas  ", "Product 1 (Category 1)", 100, "https://decathlonpro.vteximg.com.br/arquivos/ids/2208499-1000-1000/bola-de-futebol-campo-f5001.jpg?v=636743503953330000"),
new Product(2, "Bola de futebol", "Bolas  ", "Product 2 (Category 1)", 100, "https://static.netshoes.com.br/produtos/bola-de-futebol-society-nike-cbf/44/HZM-1099-044/HZM-1099-044_zoom1.jpg"),
new Product(3, "Bola de futebol", "Bolas  ", "Product 3 (Category 1)", 100, "https://decathlonpro.vteximg.com.br/arquivos/ids/2208508-1000-1000/bola-de-futebol-f100-t31.jpg?v=636743523526930000"),
new Product(4, "Bola de futebol", "Bolas  ", "Product 4 (Category 1)", 100, "https://static.netshoes.com.br/produtos/bola-de-futebol-campo-replica-brasil-cbf-nike-strike/44/HZM-1074-044/HZM-1074-044_zoom1.jpg"),
new Product(5, "Bola de futebol", "Bolas  ", "Product 5 (Category 1)", 100, "https://static.prospin.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/c/sc3101-406-bola-nike-de-futebol-tam-5-pitch-training-azul-e-limao_1.jpg"),
new Product(6, "Society", "Society ", "Product 6 (Category 2)", 100, "https://static.netshoes.com.br/produtos/chuteira-society-nike-mercurial-vapor-13-academy-tf/58/HZM-1909-058/HZM-1909-058_zoom1.jpg"),
new Product(7, "Society", "Society ", "Product 7 (Category 2)", 100, "https://static.netshoes.com.br/produtos/chuteira-society-nike-phantom-venom-academy-tf/41/HZM-0665-641/HZM-0665-641_zoom1.jpg"),
new Product(8, "Society", "Society ", "Product 8 (Category 2)", 100, "https://static.netshoes.com.br/produtos/chuteira-society-adidas-predator-19-4-tf/44/COL-4189-044/COL-4189-044_zoom1.jpg"),
new Product(9, "Society", "Society ", "Product 9 (Category 2)", 100, "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/a1c19e41d1b74ac88a73aa54011ec548_9366/Chuteira_Predator_19.4_Society_Azul_EF0413_01_standard.jpg"),
new Product(10, "Society", "Society ", "Product 10 (Category 2)", 100, "https://images.lojanike.com.br/1024x1024/produto/11317_347871_20190606185044.png"),
new Product(11, "Joelheiras", "Joelheiras ", "Product 11 (Category 3)", 100, "https://decathlonpro.vteximg.com.br/arquivos/ids/197750-1000-1000/kneepad-v-500-black-01.jpg?v=636549024799130000"),
new Product(12, "Joelheiras", "Joelheiras ", "Product 12 (Category 3)", 100, "https://static.netshoes.com.br/produtos/joelheira-para-volei-gold-sports/06/939-4706-006/939-4706-006_zoom1.jpg"),
new Product(13, "Joelheiras", "Joelheiras ", "Product 13 (Category 3)", 100, "https://decathlonpro.vteximg.com.br/arquivos/ids/2403209-1000-1000/joelheira---tamanho-3---g1.jpg?v=637030355649700000"),
new Product(14, "Joelheiras", "Joelheiras ", "Product 14 (Category 3)", 100, "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/f5f5550f77dd4e098de7a98100820f47_9366/Joelheiras_5_Inch_Preto_S98577_01_standard.jpg"),
new Product(15, "Joelheirass", "Joelheiras ", "Product 15 (Category 3)", 100, "https://www.pood.com.br/media/catalog/product/cache/5/image/810x1080/9df78eab33525d08d6e5fb8d27136e95/p/o/pood-joelheira-5mm-a-min.jpg"),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}