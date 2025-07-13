import { products } from '../data/products.js';
import { productSchema } from '../validation/product.schema.js';

export const getAll = (req, res) => res.json(products);

export const getOne = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
};

export const create = (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const id = products.length ? products.at(-1).id + 1 : 1;
  const newProduct = { id, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const update = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });

  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  Object.assign(product, req.body);
  res.json(product);
};

export const remove = (req, res) => {
  const index = products.findIndex(p => p.id === +req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  products.splice(index, 1);
  res.status(204).end();
};
