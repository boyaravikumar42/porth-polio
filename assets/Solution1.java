import java.util.*;
class Solution1
{
    /*
     * Test Case 2: Elements with varying frequencies
        Input: arr = [1, 1, 2, 2, 2, 3, 4, 4]
        Expected Output: [(1, 2), (2, 3), (3, 1), (4, 2)]
     */
    public static String countUnique(int[] arr)
    {
        StringBuilder res=new StringBuilder();
        SortedMap<Integer,Integer> mpp =new TreeMap<>();
        for(int i=0;i<arr.length;i++)
        {
            mpp.put(arr[i],mpp.getOrDefault(arr[i], 0)+1);
        }
        res.append("[");
        for(Integer key:mpp.keySet())
        {
            res.append("(");
            res.append(key);
            res.append(", ");
            res.append(mpp.get(key));
            res.append("), ");
        }
        res.deleteCharAt(res.length()-1);
        res.deleteCharAt(res.length()-1);
        res.append("]");
        return res.toString(); 
    }
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int n=s.nextInt();
        int arr[]=new int[n];
        for (int i = 0; i < n; i++) {
            arr[i]=s.nextInt();
        }
        System.out.println(countUnique(arr));
    }
}