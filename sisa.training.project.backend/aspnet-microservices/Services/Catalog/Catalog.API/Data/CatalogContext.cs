using Catalog.API.Entities;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace Catalog.API.Data
{
    public class CatalogContext : ICatalogContext
    {
        public CatalogContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetValue<string>("DatabaseSettings:ConnectionString"));
            var database = client.GetDatabase(configuration.GetValue<string>("DatabaseSettings:DatabaseName"));

            Products = (MongoCollectionBase<Product>)database.GetCollection<Product>(configuration.GetValue<string>("DatabaseSettings:CollectionName"));

            //CatalogContextSeed.SeedData(Products);
        }
        public MongoCollectionBase<Product> Products { get; }
    }
}