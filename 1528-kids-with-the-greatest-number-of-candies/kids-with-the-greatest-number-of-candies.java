class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
    List<Boolean> booleanArray  = new ArrayList<>();
      int max=Arrays.stream(candies).max().getAsInt();
        for(int i=0;i<candies.length;i++)
        {
            if(candies[i]+extraCandies>=max)
            {
                booleanArray.add(true);
            }
            else{
                booleanArray.add(false);
            }
        }
        return booleanArray;
    }
   
}