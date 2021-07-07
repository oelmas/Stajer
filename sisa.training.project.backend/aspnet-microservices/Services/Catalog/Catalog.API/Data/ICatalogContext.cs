using Catalog.API.Entities;
using MongoDB.Driver;
namespace Catalog.API.Data
{
    public interface ICatalogContext
    {
        MongoCollectionBase<Product> Products { get; }
    }
}