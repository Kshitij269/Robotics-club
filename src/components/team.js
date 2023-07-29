import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import data from './teamdata';
function Team() {
    return (
      <>
          <div className="my-8">
              <div className='bg-gradient-to-b from-purple-200 to-blue-600 mx-8 text-4xl p-2 flex justify-center font-bold border-2 border-black rounded-lg'>TEAM</div>
                <div className='bg-gradient-to-b from-purple-200 to-blue-600 mx-8 mb-5 border-2 border-black rounded-lg'>
                    <div className="text-2xl flex justify-center font-bold border-2 border-black m-2 rounded-lg">Faculty</div>
                        <div className='flex flex-wrap justify-center py-2 '>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 50 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Dr Chandra Prakash"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Dr. Chandra Prakash
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Associate Professor<br/>
                                Department of Computer Science
                                </Typography>
                            </CardContent>
                        </Card>
                        </div>
                    <div className="flex flex-wrap justify-center text-2xl font-bold border-2 border-black m-2 rounded-lg">UnderGraduates</div>
                        <div className='flex flex-wrap justify-center py-2 '>
                            {data.map((item)=>(<div className='p-2'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 50 }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Dr Chandra Prakash"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {item.post}<br/>
                                    {item.dept}<br/>
                                    {item.roll}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </div>))}
                        </div>
                </div>
          </div>
      </>
    )
  }
  export default Team;