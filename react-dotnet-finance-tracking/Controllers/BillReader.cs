using CsvHelper;
using System.IO;
using System.Globalization;
using System.Linq;

namespace react_dotnet_finance_tracking.Controllers
{
    public class BillReader
    {
        static void ReadFromFile()
        {
            using (var streamReader = new StreamReader(@"C:\Users\geral\Desktop\test.csv"))
            {
                using (var csvReader = new CsvReader(streamReader, CultureInfo.InvariantCulture))
                {
                    var records = csvReader.GetRecords<dynamic>().ToList();
                }
            }
        }
    }
}