import assert from 'node:assert/strict';
import test from 'node:test';
import { GET, POST } from '../app/api/inquiry/route.ts';

test('unconfigured inquiry delivery never issues a receipt or echoes submitted data', async () => {
  const result=POST(new Request('https://example.test/api/inquiry', {method:'POST',body:JSON.stringify({email:'private@example.test',name:'Synthetic user'})}));
  assert.equal(result.status,503);
  assert.equal(result.headers.get('cache-control'),'no-store');
  const body=await result.json();
  assert.equal(body.ok,false);
  assert.equal(body.code,'official-data-needed');
  assert.equal(body.inquiryId,undefined);
  assert.equal(body.receivedAt,undefined);
  assert.ok(!JSON.stringify(body).includes('private@example.test'));
});
test('endpoint discovery reports delivery unavailable',async()=>{
  assert.equal((await GET().json()).deliveryAvailable,false);
});

